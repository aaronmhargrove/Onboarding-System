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
        $locked_at = date('Y-m-d H:i:s');
        $this->update(compact('locked', 'locked_at'));
        return true;
    }

    public function unlock(){
        $locked = false;
        $locked_at = null;
        $this->update(compact('locked', 'locked_at'));
        return true;
    }
}
