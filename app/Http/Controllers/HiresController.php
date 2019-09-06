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
        // TODO: Figure out data structure before beginning, then complete.
        $filters = json_decode(request()->getContent());    // This returns request as a json object
        if($filters->hello){                                // Checks if the json contains data
            return $filters->hello;
        }
        
        return Hire::where('is_active', 1)->get();;
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
        dd(request());
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        // create hire w/data after validation
        // For each step, create a hire_step associated to hire
        // Add into the hire_locks table
        return $request;
    }

    /**
     * Update the hire in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hire $hire) {
        $validatedData = $this->validateHire();
        
        $hire->update([
            // TODO: Complete with actual data or inline validation in names are the same
            'this' => $validatedData->attributeName
        ]);
    }

    /**
     * Remove the hire from storage.
     *
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hire $hire){
        $hire->delete();
        // Everything else SHOULD cascade, but add here if not...
        return;
    }

    protected function validateHire(){
        // TODO: Complete validateHire with actual request data
        return request()->validate([
            'example' => ['required', 'min:3', 'max:255'],
        ]);
    }
}
