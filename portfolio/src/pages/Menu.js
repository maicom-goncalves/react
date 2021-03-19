import React, { PureComponent } from 'react'
import './Menu.scss';
import { Link } from 'react-router-dom';
class Menu extends PureComponent {
    
    render() {
        return (
            <div id="menu">
                <button id="botao">
                    <Link to="/Home"><b>HOME</b></Link>
                </button>
                <button id="botao">
                    <Link to="/Catalogo1"><b>ILUSTRAÇÃO PAPEL</b></Link>
                </button>
                <button id="botao">
                    <Link to="/Catalogo2"><b>ARTE DIGITAL</b></Link>
                </button>
            </div>
        )
    }
}

export default Menu