import {  Card, CardActions, CardContent, CardHeader, Divider } from '@mui/material'
import React from 'react'
import { BarChart } from '@mui/x-charts'

const Graph = ({dataset}) => {
    const chartSetting = {
        xAxis: [
          {
            label: 'Dinero (mm)',
          },
        ],
        
        height: 400,
    };
    return (
        <Card sx={{width: '100%'}} >
            <CardHeader
                title="Ahorro por mes"
            />
            <CardContent>
                <BarChart
                    dataset={dataset}
                    yAxis={[{ scaleType: 'band', dataKey: 'month',  }]}
                    series={[{ dataKey: 'saving', label: 'Dinero Ahorrado', valueFormatter: (value) => `${parseInt(value).toLocaleString('es-MX',{style:"currency", currency:"MXN"})}`, color:"#1677FF", labelPosition: "insideEnd" }]}
                    layout="horizontal"
                    grid={{ vertical: true }}
                    {...chartSetting}
                />
            </CardContent>
            <Divider  />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <h3>2025</h3>
            </CardActions>

        </Card>
    )
}

export default Graph