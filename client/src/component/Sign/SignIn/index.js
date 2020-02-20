import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { SignUpLink } from '../SignUp';
import { withBackaccessContext } from '../../BackEnd';
import * as ROUTES from '../../../const/routes';
import { PasswordForgetLink } from '../../Password/PasswordForget';

	const SignInPage = () => (
		<section id="login-page">
			<SignInForm />
		</section>
	);

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null,
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
		this.setState({ [event.target.name]: event.target.value })
	};

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
								<div className="field">
									<input	name="email" value={email} onChange={this.onChange} class="form-control" type="text" placeholder="Email Address" />
									<i className="fa fa-user user"></i>
								</div>
								<div className="field">
									<input 	name="password" value={password} onChange={this.onChange} class="form-control"  type="password" placeholder="Password" />
									<i className="fa fa-ellipsis-h"></i>
								</div>
								
								<div className="field footer-form text-right">
									<span className="remember"><input class="labelauty" type="checkbox" data-labelauty="Keep me signed in" checked/></span>
									<button className="btn btn-default button-form"  type="submit" disabled={ email === "" || password === "" }>Login</button>
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