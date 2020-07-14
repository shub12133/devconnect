import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
    render() {
        const { profile } = this.props;

        return (
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2 profile-avatar">
                        <img src={profile.user.avatar} alt="avatar" className="rounded-circle img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{profile.user.name}</h3>
                        <p>
                            { profile.status } { isEmpty(profile.company) ? null : (<span>at {profile.company}</span>) }
                        </p>
                        <p>
                            { isEmpty(profile.location) ? null : (<span>at {profile.location}</span>) }
                        </p>
                        <Link to={`/profile/${profile.handle}`} className="btn btn-info">
                            <div className="d-flex align-items-center">
                                <img src="https://img.icons8.com/color/25/000000/visible.png" className="mr-1" />
                                View Profile
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <h4>Skill Set</h4>
                        <ul className="list-group">
                            { profile.skills.slice(0, 4).map((skill, index) => (
                                <li key={index} className="list-group-item">
                                    <img
                                        src="https://img.icons8.com/dusk/30/000000/development-skill.png"
                                        className="mr-1"
                                        alt="skill item"
                                    />
                                    { skill }
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;
