import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { SignUpLink } from '../SignUp';
import { withBackaccessContext } from '../../BackEnd';
import * as ROUTES from '../../../const/routes';
import { PasswordForgetLink } from '../../Password/PasswordForget';
import { FormErrors } from '../../Error/index';


	const SignInPage = () => (
		<section id="login-page">
			<SignInForm />
		</section>
	);

const INITIAL_STATE = {
	email: '',
	password: '',
	formErrors: {email: '', password: ''},
	emailValid: false,
	passwordValid: false,
	formValid: false,
	error: null
};

class SignInFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = event => {
		const { email, password } = this.state;
		this.props.backaccess
			.dosignWithEmailAndPassword({email : email, password : password})
			.then(() => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.HOME);
				store.addNotification({
					title: 'Signin success',
					message: 'Welcome back',
					type: 'success',                         // 'default', 'success', 'info', 'warning'
					container: 'bottom-right',                // where to position the notifications
					animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
					animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
					dismiss: {
						duration: 3000
					}
				})
				console.log("ok")
			})
			.catch(error => {
				console.log("ko")
				this.setState({ error });
			});
		event.preventDefault();
	};

	onChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({ [event.target.name]: event.target.value },
			() => { this.validateField(name, value) });
	};

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;

		switch(fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' is invalid';
				break;
			case 'password':
				passwordValid = value.length >= 6;
				fieldValidationErrors.password = passwordValid ? '': ' must be superior to 6 characters';
				break;
			default:
				break;
		}
		this.setState({formErrors: fieldValidationErrors,
			emailValid: emailValid,
			passwordValid: passwordValid
		}, this.validateForm);
	}

	validateForm() {
		this.setState({formValid: this.state.emailValid && this.state.passwordValid});
	}

	render() {
		const { email, password, error } = this.state;


		return (
			<div class="container">
				<div className="row">
					<div className="col-sm-7 col-sm-push-5 col-md-8 col-md-push-4">
						<div className="text-desclaimer">
							<h1>Welcome</h1>
							<h3>to Trip</h3>
							.<br />
							<div class="bs-callout callout-info">
								<h4>Présentation</h4>
								<ul class="text">
									<li></li>
									<li></li>
								</ul>
							</div>
							.
						</div>
					</div>
					<div className="col-sm-5 col-sm-pull-7 col-md-4 col-md-pull-8">
						<div className="box">
							<h2 className="title">Login</h2>
							<form onSubmit={this.onSubmit}>
								{/*<FormErrors formErrors={this.state.formErrors} />*/}

								<div className="field">
									<input	name="email" value={email} onChange={this.onChange} class="form-control" type="text" placeholder="Email Address" />
									<i className="fa fa-user user"></i>
								</div>
								{ !this.state.emailValid ? (
									<small className="color-red">{ "invalid email syntax" }</small>
								) : (
									""
								)}

								<div className="field">
									<input 	name="password" value={password} onChange={this.onChange} class="form-control"  type="password" placeholder="Password" />
									<i className="fa fa-ellipsis-h"></i>
								</div>
								{ !this.state.passwordValid ? (
									<small className="color-red">{ "password must have more than 6 character" }</small>
								) : (
									""
								)}

								<div className="field footer-form text-right">
									<span className="remember"><input class="labelauty" type="checkbox" data-labelauty="Keep me signed in" checked/></span>
									<button className="btn btn-default button-form"  type="submit" disabled={!this.state.formValid}>Login</button>
								</div>		
								{error && <p>{error.message}</p>}
							</form>		
							
							<PasswordForgetLink />
							<SignUpLink />		
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

const SignInForm = compose(
	withRouter,
	withBackaccessContext,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };