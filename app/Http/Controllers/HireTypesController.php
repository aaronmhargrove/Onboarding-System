<?php

namespace App\Http\Controllers;

// MODELS
use App\HireType;

use Illuminate\Http\Request;

class HireTypesController extends Controller
{
    /**
     * Returns a listing of hire types.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        // TODO: Add authorization
        return HireType::get();
    }
}
