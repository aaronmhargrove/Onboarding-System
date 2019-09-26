import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/global/Example');
require('./components/add-hire/addHire');
require('./components/add-hire/addView');
require('./components/app.js'); // require('./components/App');
require('./components/dashboard/dashboard-main/dashboard');
require('./components/global/datePicker');
require('./components/dashboard/dashboard-main/expanded-view-modal/expandedView');
require('./components/all-records/fullview');
require('./components/all-records/fullviewtabs');
require('./components/login/login');
require('./components/global/navBar');
require('./components/dashboard/dashboard-main/searchBar');
require('./components/dashboard/dashboard-main/dashboard');
require('./components/all-records/table/stepper');
require('./components/all-records/table/steppertable');
require('./components/all-records/table/steppertabletoolbar');
require('./components/dashboard/upcoming-dates/upcomingDates');

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

