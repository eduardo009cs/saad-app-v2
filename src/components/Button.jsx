import React from 'react'
import "../styles/ButtonStyle.css"

const Buttons = ({text, onClick}) => {
  return (
    <button  onClick={onClick} className='buttons'>
        {text}
    </button>
  )
}

export default Buttons