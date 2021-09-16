import React from 'react'
import { Button, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        marginRight: '10%',
        height: "70vh",
        backgroundColor: "#2D434E",
        paddingTop: '20px'
    },
    innerPaper: {
        position: "relative",
        width: '90%',
        height: '35vh',
        left: '5%',
        backgroundColor: '#22333B'

    },
    linkButton: {
        fontSize: '2vmin',
        position: 'relative',
        right: '30vw',
        top: '5vh',
        backgroundColor: '#F2F4F3',
        // marginLeft: '8vmin',
        // marginRight: '8vmin'
        // width: '4vmin'
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    }

}));
const Skills = () => {

    const classes = useStyles()



    return (
        <div id='Projects' className="container sub-header-text" >
            <h2 id='project-list-header' className="white-header">Skills</h2>
            <Paper className={classes.paper} elevation={3}>
                <div className='skills-paper-content'>

                    <p>My non-traditional background has equipped me with a unique and dynamic set of skills, working full-time in a highly regulated laboratory and years spent obtaining a scientific undergraduate
                        have endowed me with a sharp attention to detail, a deep interest in the intersection between life and technology, and above all else, a deep desire to learn and create. </p>
                    <p>These are some of my favorite tools:</p>

                    <Paper className={classes.innerPaper} elevation={3}>
                        <div className='skill-flex-container'>

                            <div>
                                <ul className='skill-list-column'>
                                    <li>
                                        HTML5, CSS
                                    </li>
                                    <li>
                                        JavaScript (ES6)
                                    </li>
                                    <li>
                                        Python
                                    </li>
                                    <li>
                                        Ruby
                                    </li>
                                    <li>
                                        SQL
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul className='skill-list-column'>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Rails
                                    </li>
                                    <li>
                                        Flask
                                    </li>
                                    <li>
                                        PostgreSQL
                                    </li>
                                    <li>
                                        SQLite
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className='skill-list-column'>
                                    <li>
                                        Firebase (Realtime Database, <br/> Hosting, API Services)
                                    </li>
                                    <li>
                                        Heroku
                                    </li>
                                    <li>
                                        Github Pages
                                    </li>
                                    <li>
                                        Local Hosting via Raspbian
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </Paper>

                    <Link className={classes.link} to='/contact'>
                        <Button variant="contained" className={classes.linkButton}>
                            Contact
                        </Button>
                    </Link>
                </div>
            </Paper>
        </div>
    )
}

export default Skills

// I am a science and technology enthusiast interested in people, medicine and technology.
// I graduated from the University of Oregon in 2020 and have over 6 years of experience in the service industry.
// My education and employment have given me extensive experience with effective laboratory protocols, documentation, data processing/visualization techniques, software development and system modeling.
// I am currently enrolled as a Software Engineering Student at Flatiron Schools in order to pursue a career working in technology.