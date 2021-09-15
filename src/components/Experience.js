import React from 'react'
import XPCard from './XPCard'
import ExTab from './ExTab'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    linkButton: {
        fontSize: '2vmin',
        backgroundColor: '#F2F4F3',
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    }
}));
const Experience = () => {
    const classes = useStyles()
    return (
        <div id='Projects' className="container sub-header-text" >
            <h2 id='experience-list-header' className="white-header">Education & Work History</h2>
            <ExTab />
        </div>
    )
}

export default Experience
