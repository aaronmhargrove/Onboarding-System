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
        return $this->hasMany(HireStep::class)
            ->with('step')
            ->join('steps AS step', 'step.id', 'hire_steps.step_id')
            ->orderBy('step.order', 'asc')
        ;
    }

    public function hireType(){
        return $this->has(HireType::class);
    }

    public function getCurrentStep() {
        $incompleteSteps = [];

        // Just return the first incomplete step since they are ordered on the relationship
        foreach ($this->hireSteps as $hireStep) {
            if ($hireStep->status == 0) {
                return $hireStep;
            }
        }

        return null;
    }

    public function searchableAs()
    {
        return 'hires';
    }
}
