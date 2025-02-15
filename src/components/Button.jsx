import React from 'react'
import "../styles/ButtonStyle.css"

const Buttons = ({text, click}) => {
  return (
    <button  onClick={click} className='buttons'>
        {text}
    </button>
  )
}

export default Buttons