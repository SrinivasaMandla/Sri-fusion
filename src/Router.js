import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import React from 'react';

function Router() {
    return (
        <React.Fragment >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment >
    );
}
export default Router;