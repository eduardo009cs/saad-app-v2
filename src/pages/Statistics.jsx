import React from 'react'
import {getAmountPerMonth, getMissingAmountPerUser, getTotalSavings, getWaitingSavings } from '../utils/savings';
import '../styles/Statistics.css'
import CardInfo from '../components/CardInfo';
import {getDatasetForGraph, getDoughnutGraphConfig, useChartOptionsForDoughnutGraph} from '../utils/statistics'
import Grid2 from '@mui/material/Grid2';
import Graph from '../components/Graph';
import DoughnutGraph from '../components/DoughnutGraph';
import { CurrencyDollar, HourglassMedium } from '@phosphor-icons/react';

const Statistics = ({savings}) => {
   
    const pendingAmountPerUsers = getMissingAmountPerUser(savings); 
    const paidSavings = getTotalSavings(savings).toLocaleString('es-MX',{style:"currency", currency:"MXN"});
    const expectedSaving = getWaitingSavings(savings).toLocaleString('es-MX',{style:"currency", currency:"MXN"})
    const displayPendingAmountPerUsers = []
    
    const donutConfig = getDoughnutGraphConfig(savings);
    const chartOptionsForDoughnutGraph = useChartOptionsForDoughnutGraph(donutConfig.labels)
    const amountPerMonth = getAmountPerMonth(savings)
    const datasetForGraph = getDatasetForGraph(amountPerMonth);
    
    for (const key in pendingAmountPerUsers) {
        const amount = parseFloat(pendingAmountPerUsers[key]).toLocaleString('es-MX',{style:"currency", currency:"MXN"})
        displayPendingAmountPerUsers.push(
            <Grid2 size={{xs:12,sm:6,lg:3}} key={key} >
                <CardInfo title={`Faltante de ${key}`} text={`${amount}`} />
            </Grid2>
        )
    }
    return (
        
        <Grid2 container spacing={3} >
            <Grid2 size={{xs:12,sm:6,lg:3}}>
                <CardInfo title={"Ahorro Pagado"} text={`${paidSavings}`} Icon={<CurrencyDollar fontSize='1.5rem' />} />
            </Grid2>
            <Grid2 size={{xs:12,sm:6,lg:3}}  >
                <CardInfo title={"Ahorro Esperado"} text={expectedSaving} Icon={<HourglassMedium fontSize='1.5rem'/>} />
            </Grid2>
            {displayPendingAmountPerUsers}
            <Grid2 size={{lg:8,xs:12}} >
                <Graph dataset={datasetForGraph}>
                </Graph>
            </Grid2>
            <Grid2 size={{lg:4,xs:12,md:6}} >
                <DoughnutGraph chartOptions={chartOptionsForDoughnutGraph} chartSeries={donutConfig.data} labels={donutConfig.labels} />
            </Grid2>
        </Grid2>
    )
}

export default Statistics