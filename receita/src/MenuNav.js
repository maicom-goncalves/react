import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MenuNav extends Component {
    render() {
        return (
            <div id="menuNav">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/Receita1">Bolo de Fubá</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Receita2">Costela Assada</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Receita3">Sushi</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Receita4">Fondue</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Receita5">Sopa Paraguaia</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Receita6">Pamonha</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

}
export default MenuNav;