import { Col, Row, Statistic } from 'antd'
import React from 'react'
import { config } from '../utils/config';
import { getTotalSavings, getWaitingSavings } from '../utils/savings';

const Statistics = ({savings,users,numbersGenerated}) => {
    const numberPerGroup = config.numberPerGroup;
    const groupsNumber = config.groupsNumber;
    const totalNumberGenerated = savings.length;
    const totalNumbers = numberPerGroup * groupsNumber;
    console.log(savings.length)
    return (
        <Row gutter={16}>
            <Col span={8} > 
                <Statistic title= "Números Generados" value={totalNumberGenerated} suffix={`/ ${totalNumbers}`} />
            </Col>
            <Col span={8} > 
                <Statistic title= "Total Ahorrado" value={getTotalSavings(savings)}/>
            </Col>
            <Col span={8} > 
                <Statistic title= "Total de Ahorro Esperado" value={getWaitingSavings(savings)}/>
            </Col>
        </Row>
    )
}

export default Statistics