import React from 'react';
import { Link } from "react-router-dom";

const ProfileActions = () => {
    return (
        <div className="btn-group mb-4" role="group">
            <Link to="/edit-profile" className="btn btn-light">
                <img
                    src="https://img.icons8.com/ultraviolet/20/000000/edit-user-female.png"
                    alt=" Edit Profile"
                    className="mr-2"
                />
                    Edit Profile
            </Link>
            <Link to="/add-experience" className="btn btn-light">
                <img
                    src="https://img.icons8.com/ultraviolet/20/000000/find-matching-job.png"
                    alt="Add Experience"
                    className="mr-2"
                />
                Add Experience
            </Link>
            <Link to="/add-education" className="btn btn-light">
                <img
                    src="https://img.icons8.com/ultraviolet/20/000000/reading.png"
                    alt="Add Education"
                    className="mr-2"
                />
                Add Education
            </Link>
        </div>
    );
};

export default ProfileActions;
