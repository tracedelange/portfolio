import React from 'react'
import headshot from '../assets/images/headshot.jpg'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles((theme) => ({
    paper: {
        width: "80vw",
        marginLeft: '10vw',
        height: "80vh",
        backgroundColor: "#2D434E",
        paddingTop: '20px'
    },
}))

const Contact = () => {

    const classes = useStyles()
    
    return (
        <div id="Contact" className='container'>
            <Paper className={classes.paper}>

            <h2 className='white-header'>Let's get in touch</h2>
            <img src={headshot} />
            <p>I'm always open to new opportunities and I'm always open to speak. If you have any questions, comments, or if you'd just like to chat - don't hesistate to reach out.</p>
            <a href="mailto:tracedelange@me.com">Send a message</a>
            </Paper>
        </div>
    )
}

export default Contact
