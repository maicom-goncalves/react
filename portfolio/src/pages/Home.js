import React, { PureComponent } from 'react'
import foto from '../img/maicom.jpg'
class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="home">
                <h2>Home</h2>
                <img id="perfil" src={foto}/>
                <p>Maciom Gonçalves Soares Ilustrador</p>
            </div>
        )
    }
}

export default Home