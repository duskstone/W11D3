import React from 'react';
import ReactDOM from 'react-dom';
import {signUp, login, logout} from './util/session_api_util'
// import configureStore from "./store/store";
// import Root from "./components/root_component";



document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    window.signUp = signUp;
    window.login = login;
    window.logout = logout;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1> , root);
});