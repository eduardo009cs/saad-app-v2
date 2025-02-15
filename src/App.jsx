import React, { useEffect, useState } from "react";
import { Layout, Menu, Card, Row, Col, Input, Button, DatePicker } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import GenerateNumber from "./pages/GenerateNumber";


const { Header, Sider, Content } = Layout;

const SidebarLayout = () => {

   
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar />

            <Layout>
                <Header style={{ background: "#fff", padding: 0, paddingInline: 16 }}>

                </Header>

                <Content style={{ margin: 16, background: "#fff", padding: 16 }}>
                    <Routes>
                        <Route path="/" element={<Home/>}  ></Route>
                        <Route path="/generate-number" element={<GenerateNumber/>}  ></Route>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default SidebarLayout;
