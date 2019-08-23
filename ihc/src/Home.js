import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
            <div>
                <header className="cabec">
                    <h2>Bem vindo ao <i> Lar e Repouso Lírio da Paz. </i></h2>
                </header>
                <div className="cw4">
                    <div className="visita">
                        <p id="frase"><i> "Deve-se temer a velhice, porque ela nunca vem só. .
                        A infância é a idade das interrogações, a juventude a das afirmações,
                        a velhice a das negações. ...Não é que com a idade você aprenda muitas
                        coisas; mas você aprende a ocultar melhor o que ignora".</i>
                        </p>
                    </div>
                    <div className="imagem">
                        <img src="imagens/asilo.jpg" alt="lar lirio da paz" />
                        <p>FOTO ASILO </p>
                    </div>
                </div>
            </div>
        );
    }

}
export default Home;
