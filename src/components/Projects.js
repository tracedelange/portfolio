import React from 'react'
import ProjectList from './ProjectList'
import TabComp from './TabComp'
import ProjectCard from './ProjectCard'
import projects from '../projects'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    linkButton: {
        fontSize: '2vmin',
        margin: '5vmin',
        backgroundColor: '#F2F4F3',
        right: '42%'
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    }
}));

const Projects = () => {

    const classes = useStyles()

    const projectArray = projects.map((item) => <ProjectCard key={item.id} data={item} />)

    return (
        <div id='Projects' className="container sub-header-text" >
            <h2 id='project-list-header' className="white-header">Some of my best work</h2>
            <TabComp projectArray={projectArray}/>
            <Button variant="contained" className={classes.linkButton}>
                    <Link className={classes.link} to='/portfolio/experience'>Experience</Link>
            </Button>
        </div>
    )

}

export default Projects
