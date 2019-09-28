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


// ================ STANDARD ===================
// METHOD   RESOURCE            FUNCTION-NAME
// ---------------------------------------------
// GET      /base               (index)
// GET      /base/create        (create)
// GET      /base/1             (show)
// POST     /base               (store)
// GET      /base/1/edit        (edit)
// PATCH    /base/1             (update)
// DELETE   /base/1             (destroy)
// =============================================


Route::get('/hires', 'HiresController@index');                                          // Get all hires
Route::post('/hires/search', 'HiresController@search');                                  // Get hires w/ search filter (put filter json in request body)
Route::get('/hires/search/steps/{step}', 'HiresController@hiresWithIncompleteStep');    // Get hires with incomplete step (Depricated? is this replaced by the above?)
Route::post('/hires', 'HiresController@store');                                         // Create Hire (request body)
Route::patch('/hires/{hire}', 'HiresController@update');                                // Update Hire (place updated fields in request body)
Route::patch('/hires/{hire}/lock', 'HiresController@lock');                             // Lock a Hire
Route::patch('/hires/{hire}/unlock', 'HiresController@unlock');                         // Unlock a Hire
Route::delete('/hires/{hire}', 'HiresController@destroy');                              // Delete a Hire

Route::patch('/hire-steps/{hireStep}', 'HireStepsController@update');                   // Update a Hire Step by id (new status and/or date in request body)

Route::get('/hire-types', 'HireTypesController@index');                                 // Get hire types

Route::get('/steps', 'StepsController@index');                                          // Get steps

Route::get('/users', 'UsersController@index');                                          // Get all users
Route::get('/users/current', 'UsersController@currentUser');                            // Get current user (this will be to get info for display and or use the 2 endpoints below)
Route::get('/users/{user}/hires', 'UsersController@hires');                             // Get all of a user's hires
Route::get('/users/{user}/hires/filtered', 'UsersController@filteredHires');            // Get a user's hires w/ their filter applied
Route::get('/users/{user}/upcoming', 'UsersController@upcomingDates');                  // Get upcoming dates for a user
Route::patch('/users/{user}', 'UsersController@update');                                // Update a user (if updating search filter, stringify json and pass in with request body under "search_filter")

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');


Route::get('/hires/testing', 'HiresController@test'); // TESTING FOR SCHEDULED EVENT CODE