import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {registerUser} from "../../actions/authActions";

import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
               errors: nextProps.errors
            });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">
                                    <img src="https://img.icons8.com/clouds/70/000000/add-user-male.png" className="mr-1" />
                                    Sign Up
                                </h1>
                                <p className="lead text-center">Create your DevConnector account</p>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group row">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/employee-card.png" className="mr-1" />
                                        </div>
                                        <TextFieldGroup
                                            placeholder="Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            error={errors.name}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/gmail.png" />
                                        </div>
                                        <TextFieldGroup
                                            placeholder="Email Address"
                                            name="email"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            error={errors.email}
                                            info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/password.png" />
                                        </div>
                                        <TextFieldGroup
                                            placeholder="Password"
                                            name="password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            error={errors.password}
                                        />
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/synchronize.png" />
                                        </div>
                                        <TextFieldGroup
                                            placeholder="Confirm Password"
                                            name="password2"
                                            type="password"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                            error={errors.password2}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="font-weight-bold btn btn-blue btn-sm btn-block mt-4"
                                    >
                                        <img src="https://img.icons8.com/clouds/40/000000/hotel-room-key.png" className="mr-1" />
                                        Register
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
