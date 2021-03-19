import React, { PureComponent } from 'react'
import Banner from './Banner';
import Menu from './Menu'
import './Inicio.scss';
import './Conteudo'
import Conteudo from './Conteudo';
import Rodape from './Rodape';
class Inicio extends PureComponent {
    
    render() {
        return (
            <div id="inicio">
               <Banner />
               <Menu />
               <Conteudo />
               <Rodape />
            </div>
        )
    }
}
export default Inicio