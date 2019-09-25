<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;

class StepsNotComplete extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($hire)
    {
        $this->hire = $hire;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['slack'];
    }

    /**
     * Get the slack representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\SlackMessage
     */
    public function toSlack($notifiable){

        return (new SlackMessage)
            ->error()
            ->content('A hire is starting soon and has incomplete steps!')
            ->attachment(function ($attachment){
                $attachment
                    ->fields([
                        'First Name' => $this->hire->first_name,
                        'Last Name' => $this->hire->last_name,
                        '# Incomplete' => $this->hire->hire_steps_count,
                        'Start Date' => $this->hire->start_date
                    ]);
            });
    }
}
