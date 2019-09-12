<?php

namespace App\Http\Controllers;

use \App\Hire;
use \App\HireStep;
use \App\HireType;
use \App\HireLock;
use \App\Step;
use \App\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return User::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function hires(User $user){
        return $user->hires();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function filteredHires(User $user){
        //return $user->hires();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function upcomingDates(User $user){
        return DB::table('hires')
            ->join('hire_steps', 'hire_id', '=', 'hires.id')
            ->join('steps', 'step_id', '=', 'steps.id')
            ->where('hire_steps.status', '<>', 'Complete')
            ->whereRaw('((hires.admin_id = ?) OR (hires.manager_id = ?))', [$user->id, $user->id])
            ->whereRaw('DATEDIFF(start_date, CURDATE()) < 15')
            ->select('first_name', 'last_name', 'name',  'start_date')
            ->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request){
        $user = User::find($request->userId);
        $searchFilter = $request->except('userId');
        $user->search_filter = json_encode($searchFilter);


        return ($user->save()) ? "yay!" : "neigh";
    }
}
