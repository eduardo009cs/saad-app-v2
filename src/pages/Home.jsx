import React from 'react'
import SavingImage from '../assets/images/saving.png'
import LinkButton from '../components/LinkButton'
import "../styles/HomeStyles.css"
import { ScheduleFilled, SettingFilled } from '@ant-design/icons'


const Home = () => {
    return (
        <div className='home-container kanit-thin'>
            <div className='home-information'>
                <h1>Sistema de Ahorro Aleatorio Diario</h1>
                <p>El Sistema de Ahorro Aleatorio Diario (SAAD) es una aplicación diseñada para fomentar el hábito del ahorro de manera sencilla y dinámica.Cada día, el sistema genera automáticamente un número aleatorio entre 1 y 360, representando la cantidad que el usuario deberá ahorrar en esa fecha. El objetivo es que los usuarios, a lo largo del tiempo, acumulen un fondo de ahorro de forma inesperada pero organizada. La plataforma permite registrar cada ahorro diario, llevar un historial detallado y visualizar el progreso en tiempo real. </p>
                <div className='home-buttons'>
                    <div>
                        <LinkButton to={"https://github.com/eduardo009cs/saad-api"} text={`API`} icon={<SettingFilled/>}></LinkButton>
                    </div>
                    <div>
                        <LinkButton to={"https://github.com/eduardo009cs/saad-app-v2"} text={`APP`} icon={<ScheduleFilled />}></LinkButton>
                    </div>
                </div>
                
                
            </div>
            <div className='home-image'>
                <img src={SavingImage} alt="Imagen de ahorro" />
            </div>
            
        </div>
    )
}

export default Home