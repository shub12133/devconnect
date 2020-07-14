import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: '',
            degree: '',
            fieldofstudy: '',
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

        const eduData = {
            school: this.state.school,
            degree: this.state.degree,
            fieldofstudy: this.state.fieldofstudy,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        };

        this.props.addEducation(eduData, this.props.history);
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
            <div className="add-education">
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
                                    src="https://img.icons8.com/bubbles/75/000000/graduation-cap.png"
                                    alt="Add Education"
                                    className="mr-3"
                                />
                                Add Education
                            </h1>
                            <p className="lead text-center">
                                Add any school, bootcamp, etc that you have attended
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/dusk/45/000000/university.png" alt="School" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="* School"
                                        name="school"
                                        value={this.state.school}
                                        onChange={this.onChange}
                                        error={errors.school}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/ultraviolet/45/000000/diploma.png" alt="Certification" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="* Degree or Certification"
                                        name="degree"
                                        value={this.state.degree}
                                        onChange={this.onChange}
                                        error={errors.degree}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://img.icons8.com/dusk/45/000000/books.png" alt="Study" />
                                    </div>
                                    <TextFieldGroup
                                        placeholder="* Field of Study"
                                        name="fieldofstudy"
                                        value={this.state.fieldofstudy}
                                        onChange={this.onChange}
                                        error={errors.fieldofstudy}
                                    />
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-1 text-center">
                                        <span>From</span>
                                        <img src="https://img.icons8.com/plasticine/45/000000/calendar.png" alt="from" />
                                    </div>
                                    <TextFieldGroup
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
                                        <img src="https://img.icons8.com/plasticine/45/000000/calendar.png" alt="from" />
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
                                        <img src="https://img.icons8.com/dusk/45/000000/property-script.png" alt="Job Description" />
                                    </div>
                                    <TextAreaFieldGroup
                                        placeholder="Program Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                        error={errors.description}
                                        info="Tell us about the program that you were in"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-success font-weight-bold btn-block my-4"
                                >
                                    <img
                                        src="https://img.icons8.com/dusk/24/000000/plus.png"
                                        alt="Submit"
                                        className="mr-2"
                                    />
                                    Add Education
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(withRouter(AddEducation));
