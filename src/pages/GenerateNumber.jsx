import { DatePicker } from 'antd'
import React, { useRef, useState } from 'react'
import Buttons from '../components/Button'
import "../styles/GenerateNumber.css"

const GenerateNumber = () => {
    const [date, setDate] = useState("")
    const [number, setNumber] = useState(0)
    const getDate = (date, dateString) =>{
        setDate(dateString)
    }
    return (
        <div className='generate-number-container'>
            
            <DatePicker className='generate-number-date' onChange={getDate}/>
            
            <div className='generate-number-area'>
                {number}
            </div>
            <div className='generate-number-buttons'>
                <Buttons  text={"Generar"}/>
                <Buttons  text={"Guardar"}/>
            </div>
            
            
        </div>
    )
}

export default GenerateNumber