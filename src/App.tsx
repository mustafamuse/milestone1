import React from 'react';

import './App.css';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import AddRoom from "./pages/AddRoom";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
                <Route path={'/add'} element={<AddRoom/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
