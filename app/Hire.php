<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hire extends Model{
    protected $guarded = []; // accept all

    public function manager(){
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function admin(){
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function hireSteps(){
        return $this->hasMany(HireStep::class, 'step_id');
    }

    public function hireType(){
        return $this->has(HireType::class);
    }

    //complete step

    //add step
}
