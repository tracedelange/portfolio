import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../projects'

const ProjectList = () => {

    const projectArray = projects.map((item) => <ProjectCard key={item.id} data={item} />)



    return (
        <div id='project-list'>
            {projectArray[0]}
            {projectArray[1]}
            {/* <div className='break'></div>         */}
            {projectArray[2]}
            {projectArray[3]}
        </div>
    )
}

export default ProjectList
