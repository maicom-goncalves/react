import React, { PureComponent } from 'react'
import './Inicio.scss';

class Banner extends PureComponent {

    render() {
        return (
            <div id="banner">
                <div className="paginaPrincipal">
                    <div >
                        <h1 className="meunome"><b>MAICOM G. SOARES</b></h1>
                    </div>
                    <p className="titulo">
                        "
                        A perfeição não é alcançada quando não há mais nada a ser incluído.
                        A perfeição é alcançada quando não há mais nada a ser retirado
                        "
                    </p>
                    <p className="titulo">
                        .Antoine de Saint-Exupéry
                    </p>
                </div>
            </div>

        )
    }
}

export default Banner