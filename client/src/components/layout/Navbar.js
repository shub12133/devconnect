import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/feed">
                        <div className="mr-1">
                            <img src="https://img.icons8.com/office/16/000000/magazine.png" />
                        </div>
                        <div>
                            Post Feed
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/dashboard">
                        <div className="mr-1">
                            <img src="https://img.icons8.com/office/15/000000/add-key.png" />
                        </div>
                        <div>
                            Dashboard
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <a
                        href="#"
                        onClick={this.onLogoutClick.bind(this)}
                        className="nav-link"
                    >
                        <img
                            className="rounded-circle"
                            src={user.avatar}
                            alt={user.name}
                            title="You must have a Gravatar connected to your email"
                            style={{ width: '25px', marginRight: '5px' }}
                        /> Logout
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/register">
                        <div className="mr-1">
                            <img src="https://img.icons8.com/office/15/000000/add-key.png" />
                        </div>
                        <div>
                            Sign Up
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/login">
                        <div className="mr-1">
                            <img src="https://img.icons8.com/dusk/15/000000/password.png" />
                        </div>
                        <div>
                            Login
                        </div>
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 p-0">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <div className="mr-1">
                            <img src="https://img.icons8.com/color/30/000000/electrical.png" />
                        </div>
                        <div>
                            DevConnector
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/profiles">
                                    <div className="mr-1">
                                        <img src="https://img.icons8.com/office/15/000000/user-group-man-man.png" />
                                    </div>
                                    <div>
                                        Developers
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        { isAuthenticated ? authLinks : guestLinks }
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);
