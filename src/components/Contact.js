import React from 'react'
import headshot from '../assets/images/headshot.jpg'


const Contact = () => {
    return (
        <div id="Contact" className='container'>
            <h2 className='white-header'>Let's get in touch</h2>
            <img src={headshot} />
            <p>I'm always open to new opportuities and I'm always open to speak. If you have any questions, comments, or if you'd just like to chat - don't hesistate to reach out.</p>
            <a href="mailto:tracedelange@me.com">Send a message</a>
        </div>
    )
}

export default Contact
