import React, { PureComponent } from 'react'
import logo from '../img/logo-mercado.jpg'
class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="home">
                <h2>Inicio</h2>
                <img id="perfil" src={logo}/>
                <p>Super Mercado Tio João</p>
            </div>
        )
    }
}

export default Home