<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Hire extends Model{
    use Searchable;

    protected $guarded = []; // accept all

    public function manager(){
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function admin(){
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function hireSteps(){
        return $this->hasMany(HireStep::class)->orderBy('step_id', 'asc');
    }

    public function hireType(){
        return $this->has(HireType::class);
    }

    public function searchableAs()
    {
        return 'hires';
    }
}
