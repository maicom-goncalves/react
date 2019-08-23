import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagina1 extends Component {
    render() {
        return (
            <div>
                <header className="cabec">
                    <h2><b>Doações Lar e Repouso Lirio da Paz</b></h2>
                    <p><i>O simples para alguns pode ser o encantador
                     para outros.</i></p>
                    
                        <button type="button" class="btn btn-light"> 
                        <img className="icone" src="imagens/doacao789.png"/>
                            <Link to="/Pdoacao"><b>Faça sua Doação</b></Link>
                        </button>
                  
                </header>
                <div>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="imagens/doacao11.jpg" alt="Primeiro Slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="imagens/doacao12.jpeg" alt="Segundo Slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="imagens/doacao13.jpg" alt="Terceiro Slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="imagens/doacao14.jpg" alt="Terceiro Slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Anterior</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Próximo</span>
                        </a>
                    </div>
                    <br />
                    <br />
                </div>

            </div>
        );
    }

}
export default Pagina1;