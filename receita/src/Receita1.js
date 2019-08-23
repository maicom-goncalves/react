import React, { Component } from 'react';
class Receita1 extends Component {
    render() {
        return (
            <div className="cw4">
                <div className="conteudo">
                    <header className="cabec"><h3>BOLO DE FUBA</h3></header>
                    <div className="conteudoPG">

                        <p>ingredientes</p>
                        <ul>
                            <li>3 ovos inteiros</li>
                            <li>2 xícaras (chá) de fubá</li>
                            <li>3 colheres (sopa) de farinha de trigo</li>
                            <li>2 xícaras (chá) de açúcar</li>
                            <li>1/2 copo (americano) de óleo</li>
                            <li>1 copo (americano) de leite</li>
                            <li>1 colher (sopa) de fermento em pó</li>
                        </ul>
                        
                        <p>Modo de preparo</p>
                        <p>
                            Em um liquidificador, adicione os ovos, o açúcar,o fubá, a farinha de trigo, o
                            óleo, o leite e o fermento, depois bata até a massa ficar lisa e homogênea
                            Despeje a massa em uma forma untada e polvilhada
                            Leve para assar em forno médio 180 °C preaquecido por 40 minutos
                        </p>
                    </div>
                    <div className="imagem">
                        <img src="imagens/bolofuba.jpg" />
                        <p><b>Bolo de Fubá</b></p>
                    </div>
                    <footer className="footer"></footer>
                </div>
            </div>



        );
    }

}
export default Receita1;
