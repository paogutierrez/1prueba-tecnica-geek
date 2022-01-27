import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="">Bienvenidos</Link>
                <Link className="link" to="/Registro">Registro</Link>
                <Link className="link" to="/Inscritos">Inscritos</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}

