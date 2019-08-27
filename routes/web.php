<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});


// METHOD   RESOURCE            FUNCTION-NAME
// GET      /base               (index)
// GET      /base/create        (create)
// GET      /base/1             (show)
// POST     /base               (store)
// GET      /base/1/edit        (edit)
// PATCH    /base/1             (update)
// DELETE   /base/1             (destroy)

Route::resource('hires', 'HiresController');
Route::resource('hire-steps', 'HireStepsController');
//Route::get('/hire-steps/{hire}', 'HireStepsController@index')->name('hire-steps.index');
Route::resource('users', 'UsersController');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
