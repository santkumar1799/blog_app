import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from "./Homepage";
import Blogdetail from "./Blogdetail";
import Addblog from "./Addblog";
import Editblog from "./Editblog";
function App() {
    return (
            <BrowserRouter>
            <Routes>
            <Route path="/blogdetail/:id" element={<Blogdetail />}/> 

                <Route path="/" element={<Homepage />}/> 
                <Route path="/Addblog" element={<Addblog/>}/>
                <Route path="/Editblog/:id" element={<Editblog/>}/>
            </Routes>
            </BrowserRouter>
        );
}
render(<App />, document.getElementById("root"));