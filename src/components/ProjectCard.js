import React from 'react'

const ProjectCard = ({data}) => {
    return (
        <div className='project-card'>
            <h1>{data.name}</h1>
            <h3>{data.description}</h3>
        </div>
    )
}

export default ProjectCard
