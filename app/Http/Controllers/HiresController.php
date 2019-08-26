<?php

namespace App\Http\Controllers;

// MODELS
use App\HireStep;
use App\HireType;
use App\Step;
use App\User;

use App\Hire;
use Illuminate\Http\Request;

class HiresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // TODO: Add authorization
        return Hire::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // Load view
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function show(Hire $hire)
    {
        // TODO: Add auth
        return $hire;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function edit(Hire $hire)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hire $hire)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Hire  $hire
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hire $hire)
    {
        //
    }
}
