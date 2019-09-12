<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HireLock extends Model{
    protected $guarded = []; // accept all
    protected $primaryKey = 'hire_id';
    public $timestamps = false;

    public function lock(){
        if($this->locked){
            return false;
        }

        $locked = true;
        $this->update(compact('locked'));
        return true;
    }

    public function unlock(){
        $locked = false;
        $this->update(compact('locked'));
        return true;
    }
}
