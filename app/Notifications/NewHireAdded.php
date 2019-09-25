<?php

namespace App\Notifications;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;

class NewHireAdded extends Notification
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
        $this->manager = User::find($this->hire->manager_id);
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
            ->content('A new hire has been added!')
            ->attachment(function ($attachment){
                $attachment
                    ->fields([
                        'First' => $this->hire->first_name,
                        'Last' => $this->hire->last_name,
                        'Manager' => $this->manager == null ? "N/A" : $this->manager->name,
                        'Start Date' => $this->hire->start_date
                    ]);
            });
    }
}
