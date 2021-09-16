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

                    <p>I have many skills. I gained these skills thorough these experiences:</p>
                    <p>I have many skills. I gained these skills thorough these experiences:</p>
                    <p>I have many skills. I gained these skills thorough these experiences:</p>
                    <p>These are some of my favorite tools to work with:</p>

                    <Paper className={classes.innerPaper} elevation={3}>
                        <div className='skill-flex-container'>

                            <div>
                                <ul className='skill-list-column'>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul className='skill-list-column'>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='skill-list-column'>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
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
