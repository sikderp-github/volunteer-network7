import React from 'react';
import logo from '../../images/logos/logo.png';
import './Header.css'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/home">
                <img src={logo} width="150" height="80" alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse m-2" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto pr-2">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/donation">Donation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tasks">RegisteredEvents</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Register</a>
                    </li>
                </ul>
                <button type="button" class="btn btn-outline-success"><a href="/login">Login</a></button>
                <button type="button" class="btn btn-outline-dark"><a href="/admin">Admin</a></button>
            </div>
        </nav>

    );
};

export default Header;