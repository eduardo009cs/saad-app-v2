import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import React from 'react'
import { Chart } from './Chart';
import { CheckCircle, Clock, ListNumbers } from '@phosphor-icons/react';

const iconMapping = { Faltantes: ListNumbers, Pagados: CheckCircle , Pendientes: Clock }

const DoughnutGraph = ({chartOptions, chartSeries, labels}) => {
    return (
        <Card sx={{height:"100%"}}>

            <CardHeader title="Números" />
            <CardContent>
                <Stack spacing={2}>
                    <Chart height={300} options={chartOptions} series={chartSeries} type="donut" width="100%" />
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        {chartSeries.map((item, index) => {
                        const label = labels[index];
                        const Icon = iconMapping[label];

                        return (
                            <Stack key={label} spacing={1} sx={{ alignItems: 'center' }}>
                            {Icon ? <Icon fontSize='1.5rem' /> : null}
                            <Typography style={{textAlign:'center'}}>{label}</Typography>
                                <Typography color="text.secondary" variant="subtitle2">
                                    {item}
                                </Typography>
                            </Stack>
                        );
                        })}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default DoughnutGraph