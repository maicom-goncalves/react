import React, { PureComponent } from 'react'
import './Inicio.scss';

import logo from '../img/logo-maicom.png'

class Banner extends PureComponent {

    render() {
        return (
            <div id="banner">
                <div className="paginaPrincipal">
                    <div >
                        <img src={logo}/>
                        <h1>Maicom Gonçalves</h1>
                    </div>
                    <h2 className="titulo">Portfolio de ilustrações</h2>
                </div>
            </div>

        )
    }
}

export default Banner