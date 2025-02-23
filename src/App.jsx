import React, { useEffect, useState } from "react";
import {Layout} from "antd";
import {Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import GenerateNumber from "./pages/GenerateNumber";
import { getAllSavingHistory } from "./services/savingHistoryService";
import { getAllUsers } from "./services/userService";
import { getNumberGenerated } from "./utils/numbers";
import SavingsTable from "./pages/SavingsTable";
import NumberTable from "./pages/NumberTable";
import Statistics from "./pages/Statistics";

const { Header, Content } = Layout;



const SidebarLayout = () => {

    const [savings, setSavings] = useState([]);
    const [users, setUsers] = useState([]);
    const [numberGenerated, setNumberGenerated ] = useState([]);

    useEffect(() => {
        loadData()
    },[])
    const loadData = async () => {
        try {
            const [savingResponse,userResponse] = await Promise.all([
                getAllSavingHistory(),
                getAllUsers()
            ])
            if(!savingResponse.error) setSavings(savingResponse.data);
            if(!userResponse.error) setUsers(userResponse.data);

            const groups = getNumberGenerated(savingResponse.data);
            if(!groups.error) setNumberGenerated(groups.groups);

        } catch (error) {
            console.log(error)
        }
    };
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar />

            <Layout>
                <Header style={{ background: "#fff", padding: 0, paddingInline: 16 }}>
                
                </Header>

                <Content style={{ margin: 16, background: "#fff", padding: 16 }}>
                    <Routes>
                        <Route path="/" element={<Home/>}  ></Route>
                        <Route path="/generate-number" element={<GenerateNumber savings={savings} users={users} reloadData={loadData} numbersGenerated={numberGenerated} />}></Route>
                        <Route path="/savings-table" element={<SavingsTable savings={savings} users={users} reloadData={loadData}/>}></Route>
                        <Route path="/numbers-table" element={<NumberTable  numbersGenerated={numberGenerated} />}></Route>
                        <Route path="/statistics" element={<Statistics  savings={savings} users={users} numbersGenerated={numberGenerated} />}></Route>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default SidebarLayout;
