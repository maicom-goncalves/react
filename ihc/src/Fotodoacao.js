import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Fotodoacao extends Component {
    render() {
        return (
            <div>
               <header className="cabec">
                    <h2><b>Doações Lar e Repouso Lirio da Paz</b></h2>
                </header>
                <div>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="imagens/doacao1.jpg" alt="Primeiro Slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="imagens/doacao2.jpg" alt="Segundo Slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="imagens/doacao3.jpg" alt="Terceiro Slide" />
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
                </div>
                <button type="button" class="btn btn-success">
                <Link to="/Doacao"><b>DOE JÀ</b></Link>
                </button>

            </div>
        );
    }

}
export default Fotodoacao;
