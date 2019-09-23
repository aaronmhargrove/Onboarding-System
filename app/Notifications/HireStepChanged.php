<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;

class HireStepChanged extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($hire, $hireStep)
    {
        $this->hire = $hire;
        $this->hireStep = $hireStep;
        $this->status = "";
        if($this->hireStep->status == 0){ $this->status = "Incomplete"; }
        else if($this->hireStep->status == 1){ $this->status = "In Progress"; }
        else { $this->status = "Complete"; }
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
        if($this->status != "Complete"){
            return (new SlackMessage)
                ->content('A hire step was updated')
                ->attachment(function ($attachment){
                    $attachment
                        ->fields([
                            'First Name' => $this->hire->first_name,
                            'Last Name' => $this->hire->last_name,
                            'Step' => $this->hireStep->step_name,
                            'Status' => $this->status
                        ]);
                });
        } else {
            return (new SlackMessage)
                ->success()
                ->content('A hire step was updated')
                ->attachment(function ($attachment){
                    $attachment
                        ->fields([
                            'First Name' => $this->hire->first_name,
                            'Last Name' => $this->hire->last_name,
                            'Step' => $this->hireStep->step_name,
                            'Status' => $this->status
                        ]);
                });
        }
        
    }
}
