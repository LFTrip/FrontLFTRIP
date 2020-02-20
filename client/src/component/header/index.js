import React from 'react';
import {Link } from 'react-router-dom';

import * as ROUTES from '../../const/routes';

const Header = () => (
    <header className="menu-base" id="header-container-box">
        <div className="info">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    </div>
                    <div id="login-pan" className="col-md-6 hidden-xs">
                        <Link data-section="sign-in" to={ROUTES.SIGN_UP}><i className="icon fa fa-user user"></i> Sign up</Link>
                        <Link data-section="sign-in" to={ROUTES.SIGN_IN}><i className="icon fa fa-user user"></i> Login</Link>
                    </div>
                </div>
            </div>			
        </div>
        <div className="logo hidden-xs">
            <Link data-section="sign-in" to={ROUTES.HOME}> <img id="logo-header" src="images/LOGO min200.png" alt="" ></img></Link>
        </div>
        <div className="menu-navbar">
            <div className="container" id="menu-nav">
                <nav id="navigation">
                    <ul>
                        <li className="has_submenu">
                            <Link to={ROUTES.HOME}> Home</Link>
                        </li>
                        <li className="has_submenu">
                            <Link to={ROUTES.ACCOUNT}> Account</Link>
                        </li>
                        <li className="has_submenu">
                            <Link to={ROUTES.CREATE_TRIP}> Create trip</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <a href="#a" className="fixed-button top"><i className="fa fa-chevron-up"></i></a>
        <a href="#zzz" className="hidden-xs fixed-button email" data-toggle="modal" data-target="#modal-contact" data-section="modal-contact"><i className="fa fa-envelope-o"></i></a>
    </header>
);
export default Header;