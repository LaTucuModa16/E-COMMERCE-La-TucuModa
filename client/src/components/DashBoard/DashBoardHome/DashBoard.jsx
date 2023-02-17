import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavBarDash from "../NavBarDash/NavBarDash";
import "./DashBoard.css"
import HomeDash from "../../DashBoard/Pages/HomeDash/HomeDash"
import Sales from "../../DashBoard/Pages/Sales/Sales";
import Clients from "../../DashBoard/Pages/Clients/Clients"

export default function DashBoard() {

    return (
        <div className="containerDash">
            <NavBarDash />
        </div >
    )
}

{/* <Routes>
<Route path="/dash" element={<HomeDash />} />
<Route path="/sales" element={<Sales />} />
<Route path="/clients" element={<Clients />} />
</Routes> */}