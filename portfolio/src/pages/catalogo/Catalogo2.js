import React, { PureComponent } from 'react'
import './Catalogo.scss';

class Catalogo2 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="conteudo">
                <h2>Catalogo2</h2>
                <div id="conteiner">
                <div className="imagem">
                    <img src="https://i.imgur.com/ela92mdm.jpg" title="source: imgur.com" />
                </div>
                <div className="imagem">
                    <img src="https://i.imgur.com/Rl7WVlIm.jpg" title="source: imgur.com" />
                </div>
            </div>
            </div>
            
        )
    }
}

export default Catalogo2