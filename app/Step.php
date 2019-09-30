<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Step extends Model{
    public $timestamps = false;
    
    protected $guarded = []; // accept all

    public function HireSteps() {
    	return $this->belongsToMany(HireStep::class);
    }
}
