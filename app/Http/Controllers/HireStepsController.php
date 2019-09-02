<?php

namespace App\Http\Controllers;

// MODELS
use App\HireStep;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HireStepsController extends Controller
{
    /**
     * Update the hire step in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HireStep  $hireStep
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HireStep $hireStep){
        //
    }
}
