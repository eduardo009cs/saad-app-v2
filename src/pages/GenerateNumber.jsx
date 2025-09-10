import { DatePicker, message } from 'antd'
import React, { useState } from 'react'
import Buttons from '../components/Button'
import "../styles/GenerateNumber.css"
import { assigningGroup, getNewNumber, validateNumber } from '../utils/numbers'
import { validateData } from '../utils/validations'
import { addNewSavingHistory } from '../services/savingHistoryService'
import { addNewSavingUser } from '../services/savingUserService'
import { playSound } from '../utils/settings'

const GenerateNumber = ({reloadData,savings,users,numbersGenerated}) => {
    const [date, setDate] = useState("")
    const [number, setNumber] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    const key = "updatable";
    const getDate = (date, dateString) =>{
        setDate(dateString)
    }
    
    const generateNumber = async () => {
        let stop = false;
        let num = 0;
        let attempt = 0;
        let msDelay = 50;
        if(date != ""){
            while(!stop){
                num = getNewNumber(date);
                playSound()
                setNumber(num);
                await delay(msDelay);
                const numberValidate = validateNumber(num,numbersGenerated,date,attempt);
                if(numberValidate) stop = true;
                attempt++;
                msDelay += 50;
            }
        }else{
            
            messageApi.open({
                type:'warning',
                content:'Ingrese una fecha antes de generar un número'
            })
        }
        
    }
    const saveNewNumber = async () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Guardando número...'

        })
        let isValidate = validateData(date, number);
        if(isValidate.error){
            messageApi.open({
                key,
                type: "error",
                content: isValidate.description
            })
        }else{
            let group = assigningGroup(number);
            let params = {
                date: `${date}T00:00:00.000Z`,
                number: parseInt(number),
                group: parseInt(group)
            };
            let response =  await addNewSavingHistory(params)
            if(response.type === "success"){
                response = await addNewSavingUser(response.lastSavingId,users);
            }
            messageApi.open({
                key,
                type: response.type,
                content: response.message
            })
        }
        reloadData();
        
        
    };   
    const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));
    return (
        <>
            {contextHolder}
            <div className='generate-number-container'>
            
                <DatePicker className='generate-number-date' onChange={getDate} />
                <div className='generate-number-area'>
                    {number}
                </div>
                <div className='generate-number-buttons'>
                    <Buttons onClick={generateNumber} text={"Generar"}/>
                    <Buttons onClick={saveNewNumber} text={"Guardar"}/>
                </div>
                
                
            </div>
        </>
    )
}

export default GenerateNumber