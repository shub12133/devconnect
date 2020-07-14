import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const expData = {
            company: this.state.company,
            title: this.state.title,
            location: this.state.location,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        };

        this.props.addExperience(expData, this.props.history);
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onCheck = () => {
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
        });
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="add-experience">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link
                                to="/dashboard"
                                className="btn btn-blue"
                            >
                                <img
                                    src="https://img.icons8.com/flat_round/18/000000/circled-left-2.png"
                                    alt="Back"
                                    className="mr-2"
                                />
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">
                                <img
                                    src="https://img.icons8.com/dusk/50/000000/experience-skill.png"
                                    alt="Add Experience"
                                    className="mr-2"
                                />
                                Add Experience
                            </h1>
                            <p className="lead text-center">
                                Add any job or position that you have had in the past or current
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/clouds/45/000000/organization.png" alt="Company" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="* Company"
                                        name="company"
                                        value={this.state.company}
                                        onChange={this.onChange}
                                        error={errors.company}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/color/45/000000/permanent-job.png" alt="Job Title" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="* Job Title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                        error={errors.title}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/office/40/000000/worldwide-location.png" alt="location" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="Location"
                                        name="location"
                                        value={this.state.location}
                                        onChange={this.onChange}
                                        error={errors.location}
                                    />
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-1 text-center">
                                        <span>From</span>
                                        <img src="https://img.icons8.com/plasticine/45/000000/calendar.png" alt="from" />
                                    </div>

                                    <TextFieldGroup
                                        placeholder="From Date"
                                        name="from"
                                        type="date"
                                        value={this.state.from}
                                        onChange={this.onChange}
                                        error={errors.from}
                                    />
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-1 text-center">
                                        <span>To</span>
                                        <img src="https://img.icons8.com/plasticine/45/000000/calendar.png" alt="to" />
                                    </div>
                                    <TextFieldGroup
                                        name="to"
                                        type="date"
                                        value={this.state.to}
                                        onChange={this.onChange}
                                        error={errors.to}
                                        disabled={this.state.disabled ? 'disabled' : ''}
                                    />
                                </div>

                                <div className="form-check my-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="current"
                                        value={this.state.current}
                                        checked={this.state.current}
                                        onChange={this.onCheck}
                                        id="current"
                                    />
                                    <label htmlFor="current" className="form-check-label">
                                        Current Job
                                    </label>
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/dusk/45/000000/resume.png" alt="Job Description" />
                                    </div>
                                    <TextAreaFieldGroup
                                        placeholder="Job Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                        error={errors.description}
                                        info="Tell us about the position"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-success btn-block my-4 font-weight-bold"
                                >
                                    <img
                                        src="https://img.icons8.com/dusk/24/000000/plus.png"
                                        alt="Add Experience"
                                        className="mr-2"
                                    />
                                    Add Experience
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));
