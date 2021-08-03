import React from 'react'
import ImageContainer from './ImageContainer'
import backgroundImage from '../assets/images/background.jpg'
import webImage from '../assets/icons/web-64.png'
import pythonImage from '../assets/icons/python-250.png'
import reactImage from '../assets/icons/react-128.png'
import herokuImage from '../assets/icons/heroku-250.png'
import rubyImage from '../assets/icons/ruby-programming-language-240.png'
import googleImage from '../assets/icons/google-250.png'


const About = () => {
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
                </div>
            </div>
                <div id='more-about'>
                    <p>I am a Full-Stack Software Engineer Experienced with</p>
                    <ul id='framework-list'>
                        <li id='webImage'><img src={webImage} alt='web basics'/> HTML, CSS, JavaScript</li>
                        <li><img src={reactImage} alt='web basics'/>React</li>
                        <li><img src={pythonImage} alt='web basics'/>Python</li>
                        <div className="break"></div>
                        <li><img src={rubyImage} alt='web basics'/>Ruby on Rails</li>
                        <li><img src={googleImage} alt='web basics'/>Firebase</li>
                        <li><img src={herokuImage} alt='web basics'/>Heroku</li>
                    </ul>
                </div>
        </div>
    )
}

export default About;
