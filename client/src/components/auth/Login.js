import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">
                                    <img src="https://img.icons8.com/clouds/70/000000/enter-2.png" className="mr-1" />
                                    Log In
                                </h1>
                                <p className="lead text-center">Sign in to your DevConnector account</p>
                                <form  onSubmit={this.onSubmit}>
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
                                    <button
                                        type="submit"
                                        className="font-weight-bold btn btn-blue btn-sm btn-block mt-4"
                                    >
                                        <img src="https://img.icons8.com/clouds/40/000000/hotel-room-key.png" className="mr-1" />
                                        Login
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
