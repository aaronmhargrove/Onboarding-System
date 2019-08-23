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

require('./components/Example');
require('./components/AddHire');
require('./components/AddUser');
require('./components/AddView');
require('./components/App');
require('./components/Dashboard');
require('./components/DatePicker');
require('./components/ExpandedView');
require('./components/FullView');
require('./components/FullViewTabs');
require('./components/Login');
require('./components/NavBar');
require('./components/SearchBar');
require('./components/Dashboard');
require('./components/Stepper');
require('./components/StepperTable');
require('./components/StepperTableToolbar');
require('./components/UpcomingDates');

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

