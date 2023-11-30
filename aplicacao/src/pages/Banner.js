import React, { PureComponent } from 'react'
import './Inicio.scss';

import logo from '../img/logo-mercado.jpg'

class Banner extends PureComponent {

    render() {
        return (
            <div id="banner">
                <div className="paginaPrincipal">
                    <div >
                        <img src={logo}/>
                        <h1 className="mercado"><b>SUPERMERCADO TIO JOÃO</b></h1>
                    </div>
                    <h2 className="titulo">Aqui o cliente tem sempre razão</h2>
                </div>
            </div>

        )
    }
}

export default Banner