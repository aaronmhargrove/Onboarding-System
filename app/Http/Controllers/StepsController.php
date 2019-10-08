<?php

namespace App\Http\Controllers;

// MODELS
use App\Hire;
use App\HireStep;
use App\HireType;
use App\Step;
use App\User;

use Illuminate\Http\Request;

class StepsController extends Controller
{
    /**
     * Returns a listing of steps.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        // TODO: Add authorization
        return Step::get();
    }
}
