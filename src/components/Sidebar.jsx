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
    {key: "6", label: <LinkSidebar to={"/statistic"} text="Estadisticas" />, icon:<ReconciliationOutlined/>},
]

const Sidebar = () => {
    return (
        <Sider collapsible style={{ background: "#001529" }} breakpoint="lg" collapsedWidth="80">
            <div style={{ height: 64, textAlign: "center", margin: "16px 0" }}>
                <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
                    <img src={Logo} alt="Logo SAAD" />
                </div>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={items} >
            </Menu>
        </Sider>
    )
}

export default Sidebar