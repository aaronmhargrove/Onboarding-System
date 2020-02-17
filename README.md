# BayerOnboarding

This is a project proposed by Bayer for our Southern Illinois University Edwardsville senior project assignment. This is an application to facilitate the the onboarding of new hires within a company. 

Note: This was created outside of Bayer and is cleared to remain our intellectual property so it can live here.

## Authors
* Aaron Hargrove
* Dalton Voth
* Jace Plute
* Jessica Tetzner
* Matthew Chaplin

## Project setup
* Install PHP and NPM globally if not already done
* [Install Laravel](https://laracasts.com/series/laravel-from-scratch-2018/episodes/2)
* [Install Composer](https://getcomposer.org/doc/00-intro.md)
* [Install NPM](https://www.npmjs.com/get-npm)
* Open a terminal window and navigate to the project directory
* `composer install`
* `npm install`
* Copy the contents of `.env.example` to a new file called `.env` (keep example updated with any changes you make, leaving out sensitive info)
	* Change the contents of the `DB` variables point to your instance.
	* Make sure `DB_TESTING` variables point to your test instance.
* `php artisan key:generate` 
* `php artisan migrate:fresh` - This will drop old tables (if there are any) and setup new tables and relationships.
* `php artisan db:seed`

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
	* If adding a new component, don't forget to require it in /resources/js/app.js

## Troubleshooting
#### Steps are not updating properly or getting errors when Laravel tries to send notifications to Slack
* The issue is most likely that your php.ini needs some additional setup.
* Go to [this website](https://curl.haxx.se/docs/caextract.html) and download the latest cacert.pem file
* Place it in your server/computer PHP file directory (or anywhere, just somewhere where you'll be able to find it)
* In your php.ini: `curl.cainfo = "C:\the\directory\you\used\in\the\last\step\cacert.pem"`
