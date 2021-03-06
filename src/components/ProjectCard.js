import React, {useState} from 'react'
import github from '../assets/icons/github-240.png'

const ProjectCard = ({data}) => {

    const toolArray = data.tools.map((item) => {
        return (
            <li key={item}>
                <p>{item}</p>
            </li>
        )
    })

    return (
        <div className='project-card'>

            <a href={data.siteURL}><img className='main-project-image' src={data.passiveImage}></img></a>
            <h1>{data.name}</h1>
            <h3>{data.description}</h3>
            <ul className='toolBox'>
                {toolArray}
            </ul>
            <a className='gh-link' href={data.githubURL}><img src={github} /></a>

        </div>
    )
}

export default ProjectCard
