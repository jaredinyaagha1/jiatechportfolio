import React from 'react';
// import Portfolio from '../Portfolio/index.js';

function Project({ project }) {

    const { name, description, link, repo } = project;

    return (
        <div>
            {/* <h1>Projects</h1> */}
            <div className="project">
                <img
                    src={require(`../../../assets/projects/${name}.jpg`)}
                    alt={name}
                    className="project-image"
                />
                <div className="project-info">
                    <h3>
                        <a href={link}>{name}</a>{' '}
                        <a href={repo}><i className="fab fa-github"></i></a>
                    </h3>
                    <p>{description}</p>
                </div>
            </div>


        </div>
    );
}

export default Project;