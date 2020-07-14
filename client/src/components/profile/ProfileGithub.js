import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from "./ProfileHeader";

class ProfileGithub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: '0248d8257940392a94ee',
            clientSecret: 'ad2f013a051421f4cebca0b983a11a9b0e7a8d54',
            count: 5,
            sort: 'created: asc',
            repos: []
        };
    }

    componentDidMount() {
        const { username } = this.props;
        const { count, sort, clientId, clientSecret } = this.state;

        fetch(`http://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
            .then(res => res.json())
            .then(data => {
                if (this.refs.myRef && data.length) {
                    this.setState({ repos: data });
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        const { repos } = this.state;
        const repoItems = repos.map(repo => (
            <div key={repo.id} className="card card-body my-4">
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            <img
                                src="https://img.icons8.com/color/28/000000/repository.png"
                                alt="repository"
                                className="mr-1"
                            />
                            <a href={repo.html_url} className="text-info" target="_blank">{repo.name}</a>
                        </h4>
                        <p>{repo.description}</p>
                    </div>
                    <div className="col-md-6">
                        <span className="badge badge-warning mr-1">
                            Stars: {repo.stargazers_count}
                        </span>
                        <span className="badge badge-primary mr-1">
                            Watchers: {repo.watchers_count}
                        </span>
                        <span className="badge badge-dark">
                            Forks: {repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
        ));

        return (
            <div ref="myRef">
                <hr />
                <h3>
                    <img
                        src="https://img.icons8.com/color/48/000000/github.png"
                        alt="github"
                        className="mr-1"
                    />
                    Latest Github Repos</h3>
               { repoItems }
            </div>
        );
    }
}

ProfileGithub.propTypes = {
    username: PropTypes.string.isRequired
};

export default ProfileGithub;
