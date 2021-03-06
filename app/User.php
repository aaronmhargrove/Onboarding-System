<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable{
    use Notifiable;

    protected $guarded = []; // accept all

    // What to hide in returns
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function routeNotificationForSlack($notification) {
        return env('SLACK_WEBHOOK_URL');
    }

    public function manages(){
        return $this->hasMany(Hire::class, 'manager_id')->with('hireSteps');
    }

    public function admins(){
        return $this->hasMany(Hire::class, 'admin_id')->with('hireSteps');
    }

    public function hires(){
        return $this->manages->merge($this->admins); // TODO: figure out how to do this one
    }
}
 