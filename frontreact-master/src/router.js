import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./component/sidebar";
import Hobbies from "./pages/hobbies";
import Home from "./pages/home";
import Portifolios from "./pages/portifolio";
import Sujestao from "./pages/sujestao";

const RootElement = ()=>{
    return(
        <BrowserRouter>
            <Container>
                <SideBar />
            </Container>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portifolios' element={<Portifolios />} />
                <Route path='/hobbies' element={<Hobbies />} />
                <Route path='/sujestao' element={<Sujestao />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootElement