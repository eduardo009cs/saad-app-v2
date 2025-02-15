import React from 'react'
import "../styles/LinkButtonStyle.css"

const LinkButton = ({to,text, icon}) => {
  return (
    <a href={to} className='link-button' target='_blank' >
        
        <p className='link-text'>
            {icon}{text}
        </p>
    </a>
  )
}

export default LinkButton