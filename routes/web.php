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
// GET      /base               (index)
// GET      /base/create        (create)
// GET      /base/1             (show)
// POST     /base               (store)
// GET      /base/1/edit        (edit)
// PATCH    /base/1             (update)
// DELETE   /base/1             (destroy)
// =============================================


Route::get('/hires', 'HiresController@index');
Route::patch('/hires/{hire}/lock', 'HiresController@lock');
Route::patch('/hires/{hire}/unlock', 'HiresController@unlock');
Route::get('/hires/search', 'HiresController@search'); // This may need to become a post to use a body
Route::get('/hires/search/steps/{step}', 'HiresController@hiresWithIncompleteStep');
Route::post('/hires', 'HiresController@store');
Route::patch('/hires/{hire}', 'HiresController@update');
Route::delete('/hires/{hire}', 'HiresController@destroy');

Route::patch('/hire-steps/{hireStep}', 'HireStepsController@update');

Route::get('/hire-types', 'HireTypesController@index');

Route::get('/steps', 'StepsController@index');

Route::get('/users', 'UsersController@index');
Route::get('/users/{user}/hires', 'UsersController@hires');
Route::patch('/users', 'UsersController@update');



Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');