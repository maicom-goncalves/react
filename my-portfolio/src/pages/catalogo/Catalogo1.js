import React, { PureComponent } from 'react'
//import { Link } from 'react-router-dom';
import portfolio from '../../img/tv-search01.png'
import buscador from '../../img/buscador01.png'


import './Catalogo.scss';

class Catalogo1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="conteiner">
                <div className="projetos">  
                    <div className="um">
                        <img src={portfolio} />
                        <p>
                            <a href="https://tvsearch-4d4d8.web.app/" target="_blank"><b>link do projeto</b></a>
                        </p>
                        <p>
                            <a href="https://github.com/maicom-goncalves/CPW4_2019_2/tree/master/tv-search-pwa" target="_blank">
                                <b>link do repositorio</b>
                            </a>
                        </p>
                    </div>
                    <div className="dois">
                    <h4>TV-SHOW</h4>
                        <p>
                            Este projeto se trata de um buscador de series com uma
                            api fornecida gratuitamente.
                        </p>
                    </div>

                </div>
                <div className="projetos">
                    
                    <div className="um">
                    <img src={buscador} />
                        <p>
                            <a href="https://procurando-artigos.web.app/" target="_blank">
                                <b>Link do projeto</b>
                            </a>

                        </p>
                        <p>
                            <a href="https://github.com/maicom-goncalves/CPW4_2019_2/tree/master/tv-search-pwa" target="_blank">
                                <b>link do repositorio</b>
                            </a>
                        </p>
                    </div>
                    <div className="dois">
                    <h4>BUSCADOR SINOPSE WIKIPEDIA</h4>
                        <p>
                            Este projeto se trata de um buscador da sinpse de arquivos do
                            wikipedia com a api deles fornecida gratuitamente.
                        </p>
                    </div>

                </div>
            </div>

        )
    }
}

export default Catalogo1