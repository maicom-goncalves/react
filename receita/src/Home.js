import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
            <div className="cw4">
            <div className="conteudo">
            <p id="frase"><i>Bem vindo! as receitas mais tipicas para se preparar.
                "Supere-se a cada dia, somente assim vai saborear a vida e fazê-la valer a pena!"
             </i>
            </p>
            </div>
            <div className="igp">
              <img src="imagens/receitas.png"/>
              <p>RECEITAS</p>
            </div>
            </div>
        );
    }

}
export default Home;
