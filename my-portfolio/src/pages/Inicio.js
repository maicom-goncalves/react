import React, { PureComponent } from 'react'
import Banner from './Banner';
import Menu from './Menu'
import './Inicio.scss';
import './Conteudo'
import Conteudo from './Conteudo';
import Rodape from './Rodape';
import { BrowserRouter } from 'react-router-dom';
class Inicio extends PureComponent {

    render() {
        return (
            <div id="inicio">
                <BrowserRouter>
                    <Banner />
                    <Menu />
                    <Conteudo />
                    <Rodape />
                </BrowserRouter>

            </div>
        )
    }
}
export default Inicio