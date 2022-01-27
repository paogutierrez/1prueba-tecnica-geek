import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route} 
    from 'react-router-dom';
import { Inscritos } from '../components/Inscritos';
import { Navbar } from '../components/Navbar';
import { Registro } from '../components/Registro';

export const AppRouter = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route exact path="/Registro" element={<Registro/>}/>
                    <Route exact path="/Inscritos" element={<Inscritos/>}/>
                </Routes>
            </Router>
        </div>
    )
}