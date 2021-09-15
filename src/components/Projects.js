import React from 'react'
import ProjectList from './ProjectList'
import TabComp from './TabComp'
import ProjectCard from './ProjectCard'
import projects from '../projects'


const Projects = () => {



    const projectArray = projects.map((item) => <ProjectCard key={item.id} data={item} />)

    return (
        <div id='Projects' className="container sub-header-text" >
            <h2 id='project-list-header' className="white-header">Some of my best work</h2>
            <TabComp projectArray={projectArray}/>
        </div>
    )

}

export default Projects
