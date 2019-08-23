import React, { Component } from 'react';
class Galeria2 extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="imagens/festa-junina.jpg" alt="Primeiro Slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="imagens/festa-junina1.jpg" alt="Segundo Slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="imagens/festa-junina2.jpg" alt="Terceiro Slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="imagens/festa-junina3.jpg" alt="Terceiro Slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="imagens/festa-junina4.jpg" alt="Terceiro Slide" />
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
        );
    }

}
export default Galeria2;