import React, { Component } from 'react';
class Receita2 extends Component {
    render() {
        return (
            <div className="cw4">
                <div className="conteudo">
                    <div className="conteudoPG">
                        <header className="cabec"> <h3>Costela Assada</h3></header>
                        <p>ingredientes</p>
                        <ul>
                            <li>3 kg de costela não muito gordurosa</li>
                            <li>Alho</li>
                            <li>Sal a Gosto</li>
                            <li>Pimenta bode a Gosto</li>
                            <li>Cebola</li>
                            <li>2 sachês sazon para carne (embalagem vermelha)</li>
                            <li>Papel Alumínio</li>
                        </ul>
                        <p>Modo de preparo</p>
                        <p>
                            Amasse o alho, juntamente com o sal, pimenta, cebola e sazon,
                             passe esse tempero muito bem na costela
                           Envolva a costela já temperada no papel alumínio por três vezes
                            (três folhas de papel alumínio)
                          Deixando a costela em contato com o lado mais brilhante do papel,
                          lembrando de apertar
                          bem as bordas para ficar bem lacrado
                          Leve ao forno quente por 2 horas
                         Depois deste tempo retire o papel alumínio e deixe no
                          forno para dar uma douradinha
                        Fica uma delícia
                         Lembrete:
                        É melhor quando temperada de véspera
                        </p>
                    </div>
                    <div className="imagem">
                        <img src="imagens/costelaassada.jpg" />
                        <p><b>Costela Assada</b></p>
                    </div>
                </div>
            </div>
        );
    }

}
export default Receita2;
