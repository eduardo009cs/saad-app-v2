import React from 'react';
import { Table, Button, message } from 'antd';
import { DollarTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { updateSavingUser } from '../services/savingUserService';
import { deleteSaving } from '../services/savingHistoryService';
import { getDateFormated } from '../utils/settings';
import {getIndividualAmount, getTotalAmount} from "../utils/savings"

const SavingsTable = ({ savings, users, reloadData }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const baseTitles = [
        { title: 'Action', dataIndex: 'action' },
        { title: 'Fecha', dataIndex: 'fecha' },
        { title: 'Grupo', dataIndex: 'grupo' },
        { title: 'Numero', dataIndex: 'numero' },
        { title: 'Monto', dataIndex: 'monto' },
        { title: 'Total', dataIndex: 'total' },
    ];

    const userTitles = users.map(user => ({
        title: user.name,
        dataIndex: `pago${user.user_id}`
    }));

    const titles = [...baseTitles, ...userTitles];

    const data = savings.map(saving => {
        const userStatus = {};

        saving.savings_users.forEach(user => {
            userStatus[`pago${user.user_id}`] = (
                <Button
                    disabled={user.status}
                    style={{ gap: "0" }}
                    onClick={!user.status ? () => updateStatus(user.savings_users_id) : undefined}
                >
                    <DollarTwoTone style={{ fontSize: '20px' }} twoToneColor={user.status ? "#52c41a" : "#EE8105"} />
                </Button>
            );
        });

        return {
            key: saving.saving_history_id,
            action: (
                <Button onClick={() => deleteRow(saving.saving_history_id)}>
                    <DeleteTwoTone style={{ fontSize: '20px' }} twoToneColor="#D60700" />
                </Button>
            ),
            fecha: getDateFormated(saving.date),
            grupo: saving.group,
            numero: saving.number,
            monto: getIndividualAmount(saving.number, users.length),
            total: getTotalAmount(saving.number, users.length),
            ...userStatus,
        };
    });

    const updateStatus = async (savingUserId) => {
        const response = await updateSavingUser(savingUserId);
        messageApi.open({
            type:response.type,
            content:response.message
        })
        reloadData()
    }
    const deleteRow = async (savingUserId) => {
        const response = await deleteSaving(savingUserId);
        messageApi.open({
            type:response.type,
            content:response.message
        })
        reloadData()

    }
    return (
        <>
            {contextHolder}
            <Table className="table-responsive" columns={titles} dataSource={data} />
        </>
    );
};

export default SavingsTable;
