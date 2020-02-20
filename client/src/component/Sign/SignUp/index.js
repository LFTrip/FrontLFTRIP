import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { PasswordForgetLink } from '../../Password/PasswordForget';

import { withBackaccessContext } from '../../BackEnd';
import * as ROUTES from '../../../const/routes';

const SignUpPage = () => (
    <section id="user-profile">    
        <SignUpForm />
    </section>
);

const INITIAL_STATE = {
  username: '',
  name: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'le compte existe deja';

const ERROR_MSG_ACCOUNT_EXISTS = ` error`;

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

     onSubmit = event => {
        const { username,name, email, passwordOne } = this.state;
        this.props.backaccess
            .doCreateUserWithEmailAndPassword({firstname: username, lastname: name, email : email, password : passwordOne})
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.ACCOUNT);
                console.log("ok")
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }
                this.setState({ error });
            });

        event.preventDefault();
  };

  onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
  };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
            name,
        } = this.state;


        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7">
                        <div class="section-title line-style no-margin">
                            <h3 class="title">Create Account</h3>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <ul class="profile create">
                                <li>
                                    <span>User Name</span>
                                    <input  placeholder="Full Name"  value={username} onChange={this.onChange} type="text" class="form-control" name="username" id="username" />
                                </li>
                                <li>
                                    <span>Name</span>
                                    <input value={name}  onChange={this.onChange} type="text"  placeholder=" Name" class="form-control" name="name" id="name" />
                                </li>
                                <li>
                                    <span>Email Address</span>
                                    <input type="text"  value={email}  onChange={this.onChange} placeholder="Email Address"  class="form-control" name="email" id="email" />
                                </li>
                                <li>
                                    <span>Password</span>
                                    <input type="password" class="form-control" value={passwordOne} onChange={this.onChange} name="passwordOne" id="passwordOne" />
                                </li>
                                <li>
                                    <span>Pepeat Password</span>
                                    <input type="password" class="form-control" value={passwordTwo} onChange={this.onChange} name="passwordTwo" id="passwordTwo" />
                                </li>
                            </ul>
                            <div class="col-sm-12 col-md-6 text-right">
                                <button class="btn btn-default signin-button" type="submit"><i class="fa fa-sign-in"></i> Sign up</button>
                                {error && <p>{error.message}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

    const SignUpLink = () => (
        <p>
            Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </p>
    );

const SignUpForm = compose(
  withRouter,
  withBackaccessContext,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
