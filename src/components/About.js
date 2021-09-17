import React from 'react'

import ImageContainer from './ImageContainer'
import backgroundImage from '../assets/images/background.jpg'
import webImage from '../assets/icons/web-64.png'
import pythonImage from '../assets/icons/python-250.png'
import reactImage from '../assets/icons/react-128.png'
import herokuImage from '../assets/icons/heroku-250.png'
import rubyImage from '../assets/icons/ruby-programming-language-240.png'
import googleImage from '../assets/icons/google-250.png'
// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    linkButton: {
        fontSize: '2vmin',
        margin: '5vmin',
        backgroundColor: '#F2F4F3',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none'
    }
}));


const About = () => {
    const classes = useStyles();

    const handleButton = () => {
        console.log(window.pageYOffset)
    }
    return (
        <div id="About" className='container'>
            {/* <h2>
                About
            </h2> */}
            <div id='title'>
                <h3>DeLange</h3>
                <div className='break'></div>
                <h3 id='bottom'>Development</h3>
                <div id='information'>
                    <h3>My name is Trace. </h3><h3> It's great to meet you.</h3>
                    {/* <Link to="Contact" spy={true} smooth={true} ><h3 id='contact-header-clickable'>Let's get in touch.</h3></Link> */}
                </div>
            </div>
            {/* <Fade top delay={500}> */}

            <div id='more-about'>
                <p>I am a Full-Stack Software Engineer experienced with data processing and web development.</p>
                <Link className={classes.link} to='/projects'>
                    <Button variant="contained" className={classes.linkButton}>
                        Projects
                    </Button>
                </Link>
                <Link className={classes.link} to='/experience'>
                    <Button variant="contained" className={classes.linkButton}>
                        Experience
                    </Button>
                </Link>
                <Link className={classes.link} to='/skills'>
                    <Button variant="contained" className={classes.linkButton}>
                        Skills
                    </Button>
                </Link>
                <Link className={classes.link} to='/contact'>
                    <Button variant="contained" className={classes.linkButton}>
                        Contact
                    </Button>
                </Link>
                <a href='https://tracedelange.github.io/' className={classes.link} >
                    <Button variant="contained" className={classes.linkButton}>
                        Blog
                    </Button>
                </a>

            </div>
        </div>
    )
}

export default About;