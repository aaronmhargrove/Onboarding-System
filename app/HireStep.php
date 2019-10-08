<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HireStep extends Model{
    public $timestamps = false;

    protected $guarded = []; // accept all

    public function hire(){
        return $this->belongsTo(Hire::class);
    }

    public function step(){
        return $this->belongsTo(Step::class)->orderBy('order');
    }
}
