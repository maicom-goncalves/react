import React, { Component } from 'react';
class Receita4 extends Component {
    render() {
        return (
            <div className="cw4">
                <div className="conteudo">
                    <div className="conteudoPG">
                        <header className="cabec"> <h3>Fundue</h3></header>
                        <p>ingredientes</p>
                        <ul>
                            <li>100 g de chocolate meio amargo picado ou ralado</li>
                            <li>100 g de chocolate ao leite picado ou ralado</li>
                            <li>1 copo americano de creme de leite</li>
                            <li>4 colheres de sopa de conhaque ou cachaça</li>
                            <li>1 caixa de morango</li>
                            <li>1 rodela de abacaxi picada</li>
                            <li>3 bananas picadas</li>
                            <li>2 maçãs picadas</li>
                            <li>1 laranja picada</li>
                            <li>1 pão frances picado</li>
                        </ul>
                        <p>Modo de preparo</p>
                        <p>
                            Aqueça um panela de fundo grosso
                            Coloque o creme de leite e adicione os dois tipos de chocolate aos
                             poucos mexendo sem parar
                            Quando estiver derretido desligue o fogo e acrescente o conhaque ou a
                            cachaça
                            Passe o creme para uma vasilha de cerâmica ou inox
                            Quem não tiver o aparelho de fondue pode aquecer uma água, colocar num
                            pirex refratrário e colocar a vasilha com o creme de chocolate dentro
                            dela, para manter a temperatura do creme
                            Os garfinhos do aparelho podem ser substituídos por espetinho para churrasco
                            Sirva acompanhado das frutas
                        </p>
                        <aside className="imagem">
                            <img src="imagens/fundue.jpg" />
                            <p><b>Fundue</b></p>
                        </aside>
                    </div>
                </div>
            </div>

        );
    }

}
export default Receita4;