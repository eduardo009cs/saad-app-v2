import React from 'react'
import {config} from '../utils/config'
import { Table, Tag } from 'antd';

const NumberTable = ({numbersGenerated}) => {

    const rows = config.numberPerGroup;
    const cols = config.groupsNumber;
    const colors = config.colorsCells;
    const titlesTable = [
        {title: 'Grupo 1', dataIndex: '1', key:1},
        {title: 'Grupo 2', dataIndex: '2', key:2},
        {title: 'Grupo 3', dataIndex: '3', key:3},
        {title: 'Grupo 4', dataIndex: '4', key:4},
        {title: 'Grupo 5', dataIndex: '5', key:5},
        {title: 'Grupo 6', dataIndex: '6', key:6},
        {title: 'Grupo 7', dataIndex: '7', key:7},
    ]
    const generateNumberTable = () => {
        if(numbersGenerated.length > 0){
            const tableData = [];
            for (let i = 0; i < rows; i++) {
                const tableRow = {};
                for (let j = 0; j < cols; j++) {
                    let number = ( i + 1) + (rows * j) 
                    tableRow[`${j+1}`] =  <Tag color={numbersGenerated[j].includes(number) ? colors.busy : colors[`${j+1}`]}>{number}</Tag>;
                    tableRow.key = number;
                }
                tableData.push(tableRow);
            }
            return tableData;
        }
        
    }

    return (
        <div className='table-responsive'>
            <Table columns={titlesTable} dataSource={generateNumberTable()}  />
        </div>
    )
}

export default NumberTable