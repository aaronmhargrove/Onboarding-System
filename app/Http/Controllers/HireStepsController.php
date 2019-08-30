<?php

namespace App\Http\Controllers;

use App\HireStep;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HireStepsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //TODO: change out this number to accept id from front end or use Object model binding to create the hire
        $steps = DB::table('hire_steps')
            ->select('hire_steps.id', 'name', 'status', 'date_completed')
            ->join('steps', 'hire_steps.step_id', '=', 'steps.id')
            ->where('hire_id', '=', 1)->get();

        return $steps;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\HireStep  $hireStep
     * @return \Illuminate\Http\Response
     */
    public function show(HireStep $hireStep)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\HireStep  $hireStep
     * @return \Illuminate\Http\Response
     */
    public function edit(HireStep $hireStep)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HireStep  $hireStep
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HireStep $hireStep)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\HireStep  $hireStep
     * @return \Illuminate\Http\Response
     */
    public function destroy(HireStep $hireStep)
    {
        //
    }
}
