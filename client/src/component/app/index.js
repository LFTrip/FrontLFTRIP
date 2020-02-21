import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from '../Home';
import SignUpPage from '../Sign/SignUp';
import SignInPage from '../Sign/SignIn';
import AccountPage from '../Account';
import Header from '../header';
import PasswordForgetPage from '../Password/PasswordForget';
import ReactNotifications from 'react-notifications-component';
import * as ROUTES from '../../const/routes';
import { withAuthentification } from '../Session';
import {Triplist, Createtrip,TripDetail} from '../Trip';
const App = () => (
		<div id="page-container">
			<ReactNotifications />
			<Router>
				<Header />
				<div class="clear"/>
				<div>
					<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
					<Route path={ROUTES.HOME} component={HomePage} />
					<Route path={ROUTES.SIGN_IN} component={SignInPage} />
					<Route path={ROUTES.ACCOUNT} component={AccountPage} />
					<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
					<Route path={ROUTES.TRIP} component={Triplist} />
					<Route path={ROUTES.TRIPDETAIL} component={TripDetail} />
					<Route path={ROUTES.CREATE_TRIP} component={Createtrip} />
				</div>
			</Router>
		</div>
);


export default withAuthentification(App);