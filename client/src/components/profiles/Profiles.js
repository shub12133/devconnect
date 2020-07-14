import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';

import { getProfiles } from '../../actions/profileActions';
import ProfileItem from "./ProfileItem";

class Profiles extends Component {
    componentDidMount() {
        this.props.getProfiles();
    }
    
    render() {
        const { profiles, loading } = this.props.profile;
        let profileItems;

        if (profiles === null || loading) {
            profileItems = <Spinner />;
        } else {
            if (profiles.length > 0) {
                profileItems = profiles.map(profile => (
                    <ProfileItem profile={profile} key={profile._id} />
                ));
            } else {
                profileItems = <h4>No profiles found ...</h4>;
            }
        }

        return (
            <div className="profiles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">
                                <img
                                    src="https://img.icons8.com/ultraviolet/60/000000/parse-resumes.png"
                                    className="mr-2"
                                />
                                Developer Profiles</h1>
                            <p className="lead text-center">Browse and connect with developers</p>
                            { profileItems }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
