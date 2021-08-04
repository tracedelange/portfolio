import React from 'react'
import ProjectList from './ProjectList'

const Projects = () => {
    return (
        <div id='Projects' className="container sub-header-text" >
            <h2 className="white-header">Some of my best work</h2>
            {/* <p>
                And this is some of my best work
            </p> */}
            <ProjectList />
        </div>
    )
}

export default Projects
