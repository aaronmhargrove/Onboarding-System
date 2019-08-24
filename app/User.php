<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $guarded = []; // accept all

    public function manages(){
        return $this->hasMany(User::class, 'manager_id');
    }

    public function admins(){
        return $this->hasMany(User::class, 'admin_id');
    }

    public function hires(){
        return $this->manages->merge($this->admins); // TODO: figure out how to do this one
    }

    public function Role(){
        return $this->has(UserRole::class, 'role_id');
    }

    public function hireSteps(){
        return $this->hasMany(HireStep::class);
    }

    public function hireType(){
        return $this->has(HireType::class);
    }

    //complete step

    //add step
}
