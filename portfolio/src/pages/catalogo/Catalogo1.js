import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

import './Catalogo.scss';
//import Ilustracao from './Ilustracao.js';
class Catalogo1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <div className="conteiner">

                <Link to="/Ilustracao" >
                    <img className="papel" src="https://i.imgur.com/UR7GQMLm.jpg" title="luz de estrelas" />
                </Link>
                <img className="papel" src="https://i.imgur.com/zp6XABem.jpg" title="cabelo alternativo" />
                <img className="papel" src="https://i.imgur.com/BSjMPvom.jpg" title="adolescente" />
                <img className="papel" src="https://i.imgur.com/TOvZys6m.jpg" title="O mestre" />
            </div>

        )
    }
}

export default Catalogo1