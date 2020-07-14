import React, {Component} from 'react';
import Moment from "react-moment";

class ProfileCreds extends Component {
    render() {
        const { experience, education } = this.props;
        const expItems = experience.map(exp => (
            <li key={exp._id} className="list-group-item">
                <h4>{exp.company}</h4>
                <p>
                    <img
                        src="https://img.icons8.com/color/24/000000/today.png"
                        className="mr-1"
                        alt="calendar"
                    />
                    <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
                    {exp.to === null
                        ? ('Now')
                        : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
                </p>
                <p><strong>Position:</strong> {exp.title}</p>
                <p>
                    {exp.location === '' ? null : (<span><strong>Location: </strong> {exp.location}</span>)}
                </p>
                <p>
                    {exp.description === '' ? null : (<span><strong>Description: </strong> {exp.description}</span>)}
                </p>
            </li>
        ));

        const eduItems = education.map(edu => (
            <li key={edu._id} className="list-group-item">
                <h4>{edu.school}</h4>
                <p>
                    <img
                        src="https://img.icons8.com/color/24/000000/today.png"
                        className="mr-1"
                        alt="calendar"
                    />
                    <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
                    {edu.to === null
                        ? ('Now')
                        : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)}
                </p>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Field Of Study:</strong> {edu.fieldofstudy}</p>
                <p>
                    {edu.description === '' ? null : (<span><strong>Description: </strong> {edu.description}</span>)}
                </p>
            </li>
        ));

        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center text-info">
                        <img
                            src="https://img.icons8.com/dusk/24/000000/for-experienced.png"
                            alt="Experience"
                            className="mr-1  mb-1"
                        />
                        Experience
                    </h3>
                    { expItems.length > 0
                        ? (<ul className="list-group">{expItems}</ul>)
                        : <p className="text-center">No Experience Listed</p>
                    }
                </div>
                <div className="col-md-6">
                    <h3 className="text-center text-info">
                        <img
                            src="https://img.icons8.com/dusk/24/000000/university.png"
                            alt="Education"
                            className="mr-1 mb-1"
                        />
                        Education
                    </h3>
                    { eduItems.length > 0
                        ? (<ul className="list-group">{eduItems}</ul>)
                        : <p className="text-center">No Education Listed</p>
                    }
                </div>
            </div>
        );
    }
}

export default ProfileCreds;
