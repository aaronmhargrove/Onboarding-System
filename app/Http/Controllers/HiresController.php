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
        // Create hire w/data after validation
        $hire = Hire::create($this->validateHire());

        // For each step, create a hire_step associated to hire
        $steps = Steps::get();
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
        $validatedData = $this->validateHire();
        
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
            'regional_location' => ['nullable', 'max:255'],
            'first_name' => ['required', 'min:1', 'max:255'],
            'last_name' => ['required', 'min:1', 'max:255'],
            'email' => ['nullabe', 'max:255', 'email'],
            'cwid' => ['nullabe', 'max:100'],
            'gender' => ['nullable', 'max:100'],
            'hire_type_id' => ['nullabe', 'numeric'],
            'start_date' => ['nullabe', 'date'],
            'vendor' => ['nullabe', 'max:255'],
            'role' => ['nullabe', 'max:255'],
            'pl_ic' => ['nullabe', 'max:255'],
            'team_name' => ['nullabe', 'max:255'],
            'platform' => ['nullabe', 'max:255'],
            'manager_id' => ['nullabe', 'numeric'],
            'hire_status' => ['nullabe', 'max:255'],
            'onboarding_buddy' => ['nullabe', 'max:255'],
            'computer_needs' => ['nullabe', 'max:255'],
            'seat_number' => ['nullabe', 'max:255'],
            'campus' => ['nullabe', 'max:100'],
            'manager_comments' => ['nullabe'],
            'neid' => ['nullabe', 'numeric'],
            'hire_ticket' => ['nullabe', 'max:255'],
            'mac_ticket' => ['nullabe', 'max:255'],
            'admin_id' => ['nullabe', 'numeric'],
            'slack_url' => ['nullabe', 'max:255'],
            'is_active' => ['nullabe'],
        ]);
    }
}
