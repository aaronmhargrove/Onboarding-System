<?php

namespace App\Http\Controllers;

// MODELS
use \App\Hire;
use \App\HireStep;
use \App\HireType;
use \App\HireLock;
use \App\Step;
use \App\User;

use Illuminate\Http\Request;

class HiresController extends Controller
{
    /**
     * Returns a listing of hires.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return Hire::where('is_active', 1)->with('hireSteps')->get();
    }

    /**
     * Locks and returns success status
     *
     * @return \Illuminate\Http\Response
     */
    public function lock($id) {
        $hireLock = HireLock::where('hire_id', $id)->first();
        return response()->json(['success' => $hireLock->lock()]);
    }

    /**
     * Unlocks a hire
     *
     * @return \Illuminate\Http\Response
     */
    public function unlock($id){
        $hireLock = HireLock::where('hire_id', $id)->first();
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
        return request();
        $hire = Hire::create($this->validateHire());

        // For each step, create a hire_step associated to hire
        $steps = Step::get();
        foreach ($steps as $step) {
            HireStep::create([
                "hire_id" => $hire->id,
                "step_id" => $step->id
            ]);
        }

        // Add into the hire_locks table
        HireLock::create([
            "hire_id" => $hire->id
        ]);
    }

    /**
     * Update the hire in storage.
     *
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function update(Hire $hire) {
        $hire->update($this->validateHire());
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

    protected function validateHire(){
        return request()->validate([
            'regional_location' => ['max:255'],
            'first_name' => ['required', 'min:1', 'max:255'],
            'last_name' => ['required', 'min:1', 'max:255'],
            'email' => ['max:255', 'email'],
            'cwid' => ['max:100'],
            'gender' => ['max:100'],
            'hire_type_id' => ['numeric'],
            'start_date' => ['date'],
            'vendor' => ['max:255'],
            'role' => ['max:255'],
            'pl_ic' => ['max:255'],
            'team_name' => ['max:255'],
            'platform' => ['max:255'],
            'manager_id' => ['numeric'],
            'hire_status' => ['max:255'],
            'onboarding_buddy' => ['max:255'],
            'computer_needs' => ['max:255'],
            'seat_number' => ['max:255'],
            'campus' => ['max:100'],
            'manager_comments' => [],
            'neid' => ['numeric'],
            'hire_ticket' => ['max:255'],
            'mac_ticket' => ['max:255'],
            'admin_id' => ['numeric'],
            'slack_url' => ['max:255'],
            'is_active' => [],
            'set_inactive_on' => ['date'],
        ]);
    }
}
