import { config } from "./config";
import { getAmountPerMonth, getUnpaidMissingNumbers } from "./savings";
import { alpha,useTheme } from "@mui/material";

export const getBarGraphConfig = (savings) => {
    const labels = config.months;
    const data = getAmountPerMonth(savings);
    const borderColor = config.borderColor;
    const backgroundColor = config.backgroundColor;
    return {labels,data,borderColor,backgroundColor}
}

export const getDoughnutGraphConfig = (savings) => {
    const unpaidMissingNumbers = getUnpaidMissingNumbers(savings)
    const numberPerGroup = config.numberPerGroup;
    const groupsNumber = config.groupsNumber;
    const paidNumbers = savings.length - unpaidMissingNumbers;
    const missingNumbers = (numberPerGroup * groupsNumber) - unpaidMissingNumbers - paidNumbers;
    return {
        data: [missingNumbers,paidNumbers,unpaidMissingNumbers],
        labels: config.numbersLabels
    };
}

export function getDatasetForGraph(amountPerMonths){
    const dataset = [];
    const month = config.months;
    for(let i = 0; i < amountPerMonths.length; i++){
        dataset.push({
            saving:amountPerMonths[i],
            month: month[i]
        })
    }
    return dataset
}

export function useChartOptionsForDoughnutGraph(labels) {
    const theme = useTheme();
  
    return {
        chart: { background: 'transparent' },
        colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.warning.main],
        dataLabels: { enabled: false },
        labels,
        legend: { show: false },
        plotOptions: { pie: { expandOnClick: false } },
        states: { active: { filter: { type: 'none' } }, hover: { filter: { type: 'none' } } },
        stroke: { width: 0 },
        theme: { mode: theme.palette.mode },
        tooltip: { fillSeriesColor: false },
    };
}
