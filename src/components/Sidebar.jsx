import { AppstoreAddOutlined, DollarOutlined, HomeOutlined, NumberOutlined, ReconciliationOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import LinkSidebar from './LinkSidebar'
import Logo from "../assets/images/logo.png"

const items = [
    {key: "1", label: <LinkSidebar to={"/"} text="Home" />, icon:<HomeOutlined />},
    {key: "2", label: <LinkSidebar to={"/generate-number"} text="Generar Número" />, icon:<AppstoreAddOutlined />},
    {key: "3", label: <LinkSidebar to={"/savings-table"} text="Tabla de Ahorros" />, icon:<DollarOutlined />},
    {key: "4", label: <LinkSidebar to={"/numbers-table"} text="Tabla de Números" />, icon:<NumberOutlined />},
    {key: "5", label: <LinkSidebar to={"/statistics"} text="Estadisticas" />, icon:<ReconciliationOutlined/>},
]

const getSelectedKeys = () => {
    switch(location.pathname){
        case "/":
            return ["1"];
        case "/generate-number":
            return ["2"];
        case "/savings-table":
            return ["3"];
        case "/numbers-table":
            return ["4"];
        case "/statistics":
            return ["5"];
    }
}

const Sidebar = () => {
    return (
        <Sider collapsible style={{ background: "#001529" }} breakpoint="lg" collapsedWidth="80">
            <div style={{ height: 64, textAlign: "center", margin: "16px 0" }}>
                <div style={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>
                    <p style={{color:"white", paddingTop:"15px"}}>SAAD</p>
                </div>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={getSelectedKeys()} items={items} >
            </Menu>
        </Sider>
    )
}

export default Sidebar