import React, { Component } from 'react';
import Star from './Star';


class Restaurante extends Component {

    render() {

        return (
            <div>
                <div className="card cardRestaurante">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img
                                        className="rounded thumbailRestaurante"
                                        alt="Foto do restaurante"
                                        src={this.props.restaurante.enderecoImagem} />
                                </div>
                                <div className="col-md-8">
                                    <h3>{this.props.restaurante.nome}</h3>
                                    <p>
                                        <b>Onde fica?</b> {this.props.restaurante.endereco}
                                    </p>
                                    <p>
                                        <b>O que tem de bom por lá?</b> {this.props.restaurante.tiposPrato}
                                    </p>
                                    <div id="estrela"><Star star="1" /> </div>
                                    <div>
                                        <form >
                                        
                                            <input type="text" id="addComentario"
                                            placeholder="deixe seu comentario" 
                                            /><br/>
                                            <button className="btn btn-lg btn-danger" id="btnComentar">comentar
                                            </button>
                                            <br/>
                                        </form>
                                    </div>
                                    <div className="comentarios">
                                        <ul id="coments">
                                            <li></li>
                                        </ul>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Restaurante;