import React from 'react'
import XPCard from './XPCard'

const Experience = () => {
    return (
        <div id="Experience" className="container">
            <div className='sub-header-text'>
                <h2 className="white-header" >Where I've been</h2>
                {/* <p>Where I've Been</p> */}
                <ul id='xp-list'>
                    <XPCard title={"Univeristy of Oregon"} role={"B.S. Biology - Awarded January 2020"} />
                    <XPCard title={"American Preclinical Services"} role={"Pathology Technician - 9/2021-7/2021"} />
                    <XPCard title={"Flatiron School"} role={"Software Enginnering Student"} />
                    <XPCard title={"Freelance Developer"} role={""}/>
                </ul>
            </div>
        </div>
    )
}

export default Experience
