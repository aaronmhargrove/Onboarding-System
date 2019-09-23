<?php

namespace App\Http\Controllers;

// MODELS
use \App\Hire;
use \App\HireStep;
use \App\HireType;
use \App\HireLock;
use \App\Step;
use \App\User;

use App\Notifications\NewHireAdded;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class HiresController extends Controller
{
    /**
     * Returns a listing of hires.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return Hire::where('is_active', 1)->with('hireSteps')->withCount(['hireSteps' => function($query){
            $query->where('status', '=', 2);
        }])->get();
    }

    /**
     * Locks and returns success status
     *
     * @return \Illuminate\Http\Response
     */
    public function lock(Hire $hire) {
        $hireLock = HireLock::where('hire_id', $hire->id)->first();
        return response()->json(['success' => $hireLock->lock()]);
    }

    /**
     * Unlocks a hire
     *
     * @return \Illuminate\Http\Response
     */
    public function unlock(Hire $hire){
        $hireLock = HireLock::where('hire_id', $hire->id)->first();
        return response()->json(['success' => $hireLock->unlock()]);
    }

    /**
     * Returns a listing of hires within search parameters.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(){
        $filters = json_decode(request()->getContent());    // This returns request as a json object
        if($filters->hello){                                // Checks if the json contains data
            return $filters->hello;
        }
        // TODO: Figure out data structure before beginning, then complete.
        return request();
    }

    /**
     * Returns a listing of hires with a certain step that is uncompleted.
     * @param $stepId
     * @return \Illuminate\Http\Response
     */
    public function hiresWithIncompleteStep($stepId){
        dd(request(), $stepId);
        // TODO: Figure out data structure before beginning, then complete.
        return request();
    }

    /**
     * Store a newly created hire in database.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(){
        $hire = Hire::create($this->validateHireCreation());

        // For each step, create a hire_step associated to hire
        $steps = Step::get();
        foreach ($steps as $step) {
            HireStep::create([
                "hire_id" => $hire->id,
                "step_id" => $step->id,
                "step_name" => $step->name
            ]);
        }

        // Add into the hire_locks table
        HireLock::create([
            "hire_id" => $hire->id
        ]);

        User::first()->notify(new NewHireAdded($hire));
    }

    /**
     * Update the hire in storage.
     *
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function update(Hire $hire) {
        $hire->update($this->validateHireUpdate());
    }

    /**
     * Remove the hire from storage.
     *
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hire $hire){
        HireStep::where('hire_id', $hire->id)->delete();
        HireLock::where('hire_id', $hire->id)->delete();
        $hire->delete();
        return;
    }

    public function test(){
        return Hire::where('is_active', 1)->with('hireSteps')->withCount(['hireSteps' => function($query){
            $query->where('status', '=', 2);
        }])->get();
    }

    protected function validateHireCreation(){
        return request()->validate([
            'regional_location' => ['nullable', 'max:255'],
            'first_name' => ['required', 'min:1', 'max:255'],
            'last_name' => ['required', 'min:1', 'max:255'],
            'email' => ['nullable', 'max:255', 'email', 'nullable'],
            'cwid' => ['nullable', 'max:100'],
            'gender' => ['nullable', 'max:100'],
            'hire_type' => ['nullable', 'max:255'],
            'start_date' => ['nullable', 'date'],
            'vendor' => ['nullable', 'max:255'],
            'role' => ['nullable', 'max:255'],
            'pl_ic' => ['nullable', 'max:255'],
            'team_name' => ['nullable', 'max:255'],
            'platform' => ['nullable', 'max:255'],
            'manager_id' => ['nullable', 'nullable', 'numeric'],
            'hire_status' => ['nullable', 'max:255'],
            'onboarding_buddy' => ['nullable', 'max:255'],
            'computer_needs' => ['nullable', 'max:255'],
            'seat_number' => ['nullable', 'max:255'],
            'campus' => ['nullable', 'max:100'],
            'manager_comments' => ['nullable'],
            'neid' => ['nullable', 'numeric',],
            'hire_ticket' => ['nullable', 'max:255'],
            'mac_ticket' => ['nullable', 'max:255'],
            'admin_id' => ['nullable', 'numeric'],
            'slack_url' => ['nullable', 'max:255'],
            'is_active' => ['nullable'],
            'set_inactive_on' => ['nullable', 'date']
        ]);
    }

    protected function validateHireUpdate(){
        return request()->validate([
            'regional_location' => ['nullable', 'max:255'],
            'first_name' => ['nullable', 'min:1', 'max:255'],
            'last_name' => ['nullable', 'min:1', 'max:255'],
            'email' => ['nullable', 'max:255', 'email'],
            'cwid' => ['nullable', 'max:100'],
            'gender' => ['nullable', 'max:100'],
            'hire_type' => ['nullable', 'min:1', 'max:255'],
            'start_date' => ['nullable', 'date'],
            'vendor' => ['nullable', 'max:255'],
            'role' => ['nullable', 'max:255'],
            'pl_ic' => ['nullable', 'max:255'],
            'team_name' => ['nullable', 'max:255'],
            'platform' => ['nullable', 'max:255'],
            'manager_id' => ['nullable', 'numeric'],
            'hire_status' => ['nullable', 'max:255'],
            'onboarding_buddy' => ['nullable', 'max:255'],
            'computer_needs' => ['nullable', 'max:255'],
            'seat_number' => ['nullable', 'max:255'],
            'campus' => ['nullable', 'max:100'],
            'manager_comments' => ['nullable'],
            'neid' => ['nullable', 'numeric'],
            'hire_ticket' => ['nullable', 'max:255'],
            'mac_ticket' => ['nullable', 'max:255'],
            'admin_id' => ['nullable', 'numeric'],
            'slack_url' => ['nullable', 'max:255'],
            'is_active' => ['nullable'],
            'set_inactive_on' => ['nullable', 'date']
        ]);
    }
}
