'use client';

import dynamic from 'next/dynamic';
import { styled } from '@mui/material/styles';

const ApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
    loading: () => <p>Cargando gráfico...</p> 
});

const StyledChart = styled(ApexChart)``;

export const Chart = (props) => {
    if (!ApexChart) return <p>Gráfico no disponible</p>;
    return <StyledChart {...props} />;
};
