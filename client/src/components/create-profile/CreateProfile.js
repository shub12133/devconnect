import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { createProfile } from "../../actions/profileActions";


class CreateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        };

        this.props.createProfile(profileData, this.props.history);
    };

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value });
    };

    render() {
        const { errors, displaySocialInputs } = this.state;

        let socialInputs;

        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        placeholder="Twitter Profile URL"
                        name="twitter"
                        icon="fab fa-twitter"
                        value={this.state.twitter}
                        onChange={this.onChange}
                        error={errors.twitter}
                    />

                    <InputGroup
                        placeholder="Facebook Page URL"
                        name="facebook"
                        icon="fab fa-facebook"
                        value={this.state.facebook}
                        onChange={this.onChange}
                        error={errors.facebook}
                    />

                    <InputGroup
                        placeholder="Linkedin Profile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        value={this.state.linkedin}
                        onChange={this.onChange}
                        error={errors.linkedin}
                    />

                    <InputGroup
                        placeholder="YouTube Channel URL"
                        name="youtube"
                        icon="fab fa-youtube"
                        value={this.state.youtube}
                        onChange={this.onChange}
                        error={errors.youtube}
                    />

                    <InputGroup
                        placeholder="Instagram Page URL"
                        name="instagram"
                        icon="fab fa-instagram"
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}
                    />
                </div>
            );
        }

        // Select options for status
        const options = [
            { label: '* Select Professional Status', value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student or Learning', value: 'Student or Learning' },
            { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' }
        ];

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-blue">
                                <img
                                    src="https://img.icons8.com/flat_round/18/000000/circled-left-2.png"
                                    alt="Back"
                                    className="mr-2"
                                />
                                Go Back
                            </Link>

                            <h1 className="display-4 text-center">
                                <img
                                    src="https://img.icons8.com/dusk/50/000000/add-user-group-woman-man.png"
                                    alt="create profile"
                                    className="mr-2"
                                />
                                Create Your Profile
                                </h1>
                            <p className="lead text-center">
                                Let's get some information to make your profile stand out
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/clouds/45/000000/employee-card.png" alt="handle" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="* Profile Handle"
                                        name="handle"
                                        value={this.state.handle}
                                        onChange={this.onChange}
                                        error={errors.handle}
                                        info="A unique handle for your profile URL.
                                        Your full name, company name, nickname"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/dusk/45/000000/goal.png" alt="Status" />
                                    </div>
                                    <SelectListGroup
                                        placeholder="Status"
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange}
                                        options={options}
                                        error={errors.status}
                                        info="Give us an idea of where you are at in your career"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/bubbles/45/000000/company.png" alt="company" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="Company"
                                        name="company"
                                        value={this.state.company}
                                        onChange={this.onChange}
                                        error={errors.company}
                                        info="Could be your own company or one you work for"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/bubbles/45/000000/geography.png" alt="website" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="Website"
                                        name="website"
                                        value={this.state.website}
                                        onChange={this.onChange}
                                        error={errors.website}
                                        info="Could be your own website or a company one"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/dusk/45/000000/city.png" alt="location" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="Location"
                                        name="location"
                                        value={this.state.location}
                                        onChange={this.onChange}
                                        error={errors.location}
                                        info="City or city & state suggested (eg. Boston, MA)"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/dusk/45/000000/development-skill.png" alt="skills" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="* Skills"
                                        name="skills"
                                        value={this.state.skills}
                                        onChange={this.onChange}
                                        error={errors.skills}
                                        info="Please use comma separated values (eg.HTML,CSS,JavaScript,PHP)"
                                    />
                                </div>


                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/color/45/000000/github-2.png" alt="githubusername" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="Github Username"
                                        name="githubusername"
                                        value={this.state.githubusername}
                                        onChange={this.onChange}
                                        error={errors.githubusername}
                                        info="If you want your latest repos and a Github link, include your username"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/dusk/45/000000/contract-job.png" alt="bio" />
                                    </div>
                                    <TextAreaFieldGroup
                                        placeholder="Short Bio"
                                        name="bio"
                                        value={this.state.bio}
                                        onChange={this.onChange}
                                        error={errors.bio}
                                        info="Tell us a little about yourself"
                                    />
                                </div>

                                <div className="mb-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                displaySocialInputs: !prevState.displaySocialInputs
                                            }));
                                        }}
                                        className="btn btn-primary mr-2"
                                    >
                                        <img
                                            src="https://img.icons8.com/cotton/30/000000/plus.png"
                                            alt="Add Social"
                                            className="mr-1"
                                        />
                                        Add Social Network Links
                                    </button>
                                    <span className="text-muted">Optional</span>
                                </div>
                                {socialInputs}
                                <button
                                    type="submit"
                                    className="btn btn-success btn-block mt-4 font-weight-bold"
                                >
                                    <img
                                        src="https://img.icons8.com/office/30/000000/add-user-male.png"
                                        alt="edit submit"
                                        className="mr-1"
                                    />
                                    Create Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    createProfile: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));
