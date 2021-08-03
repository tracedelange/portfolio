import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../projects'

const ProjectList = () => {

    const projectArray = projects.map((item) => <ProjectCard key={item.id} data={item} />)

    return (
        <div id='project-list'>
            {projectArray}        
        </div>
    )
}

export default ProjectList
