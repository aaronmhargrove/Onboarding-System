# BayerOnboarding

This is an application to facilitate the the onboarding of new hires at Bayer's software engineering department in St.Louis. 

Part of the SIUE Senior Design and Implementation course

## Project setup
* Install PHP and NPM globally if not already done
* [Install Laravel](https://laracasts.com/series/laravel-from-scratch-2018/episodes/2)
* [Install Composer](https://getcomposer.org/doc/00-intro.md)
* [Install NPM](https://www.npmjs.com/get-npm)
* Setup a local MySQL database with legacy style encryption: `BayerOnboarding`
* Open a terminal window and navigate to the project directory
* `composer install`
* `npm install`
* Copy the contents of `.env.example` to a new file called `.env` (keep example updated with any changes you make, leaving out sensitive info)
	* Change the contents of the `DB` variables to match your local database setup
	* Make sure `DB_DATABASE` is set to an existing local database
* Once the local database is setup, run `php artisan migrate`
* `php artisan key:generate`

## Running the Project
* Open 2 terminal windows
	* Laravel terminal window
		* `php artisan serve` to start the web server
	* React terminal window
		* `npm run watch` to compile Javascript/CSS and enable hot reloading

## General Project Structure
* Application inits from /routes/web.php to go to the home route
* Returns the view in /resources/views/home.blade.php, which houses the starting point for React
	* The script tag at the bottom includes the compiled react script located at /resources/js/app.js
* All react components are housed in /resources/js/components
	* When adding a new component, don't forget to require it in /resources/js/app.js
