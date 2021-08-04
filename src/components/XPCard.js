import React from 'react'

const XPCard = ({title, role}) => {
    return (
        <li className='xpItem'> 
            <h3>{title}</h3>
            <p className='xpItem-pos'>{role}</p>
        </li>
    )
}

export default XPCard
