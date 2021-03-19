import React, { PureComponent } from 'react'

import './Catalogo.scss';

class Catalogo1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div id="conteudo">
                <h2>Catalogo1</h2>
                <div className="conteiner">
                    
                    <div className="imagem">
                        <img src="https://i.imgur.com/UR7GQMLm.jpg" title="source: imgur.com" />
                    </div>
                    <div className="imagem">
                        <img src="https://i.imgur.com/zp6XABem.jpg" title="source: imgur.com" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Catalogo1