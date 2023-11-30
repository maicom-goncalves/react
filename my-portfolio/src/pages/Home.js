import React, { PureComponent } from 'react'
import logo from '../img/maicom.jpg'
class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div id="home">
                <img id="perfil" src={logo} />
                <h3><b>Maicom G. Soares</b></h3>
                <p>
                    Estudante de tecnologia em sistemas para internet no Instituto Federal de Mato Grosso do Sul campus Aquidauana
                    tenho afinidade em criar design de sites web e atender a responsividade de dispositivos
                    moveis gosto de pensar nos
                    detalhes nas cores para que o resultado seja agradável e harmonioso ,
                    participei de varias competições internas e com
                    outros campus do instituto federal na área de algoritimos e hackatons .
                </p>
            </div>
        )
    }
}

export default Home