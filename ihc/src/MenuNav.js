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
                            <Link to="/Home">HOME</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Pagina1">DOAÇÕES</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Pagina2">CADASTRO</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Quem">QUEM SOMOS</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Pagina3">FOTOS</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

}
export default MenuNav;