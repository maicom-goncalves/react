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

            <div id="conteiner">

                <img className="digital" src="https://i.imgur.com/ela92mdm.jpg" title="cenario deserto" />


                <img className="digital" src="https://i.imgur.com/Rl7WVlIm.jpg" title="zootecnista-psicultura" />

            </div>

        )
    }
}

export default Catalogo2