# BayerOnboarding

This is an application to facilitate the the onboarding of new hires at Bayer's software engineering department in St.Louis. 

Part of the SIUE Senior Design and Implementation course

## Project setup
* Install Composer https://getcomposer.org/doc/00-intro.md
* Install NPM https://www.npmjs.com/get-npm
* Setup a local MySQL database 
* Open a terminal window and navigate to the project directory
* `composer install`
* `npm install`
* edit `.env.example` to `.env`
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

