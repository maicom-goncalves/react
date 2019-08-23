import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Menu extends Component {
    render() {
        return (
            <div id="menu">

                <button id="botao">
                    <img className="icone" src="imagens/iconfinder2849819.png" />
                    <Link to="/Home"><b>HOME</b></Link></button>

                <button id="botao"> <img className="icone" src="imagens/iconfinder2849807.png" />
                    <Link to="/Pagina1"><b>DOAÇÕES</b></Link></button>

                <button id="botao"> <img className="icone" src="imagens/cadastro2.png" />
                    <Link to="/Pagina2"><b>CADASTRO</b></Link></button>
                <button id="botao">
                    <img className="icone" src="imagens/quemsomos.png" />
                    <Link to="/Quem"><b>QUEM SOMOS</b></Link></button>
                <button id="botao">
                    <img className="icone" src="imagens/foto.png" />
                    <Link to="/Pagina3"><b>FOTOS</b></Link></button>
            </div>
        );
    }

}
export default Menu;