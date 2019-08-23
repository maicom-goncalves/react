import React, { Component } from 'react';
class Receita5 extends Component {
    render() {
        return (
            <div className="cw4">
                <div className="conteudo">
                    <div className="conteudoPG">
                        <header className="cabec"> <h3>Sopa Paraguaia</h3></header>
                        <p>ingredientes</p>
                        <ul>
                            <li>500g de fubá</li>
                            <li>2litros de leite(Integral)</li>
                            <li>800g de queijo meia cura</li>
                            <li>3 Cebolas grandes picadas</li>
                            <li>2 colheres de oleo</li>
                            <li>6 Ovos</li>
                        </ul>
                        <br />
                        <br />
                        <p>Modo de preparo</p>
                        <p>
                            Refogue a cebola até que fique transparente, acrescente o leite já
                            aquecido e deixe ferver junto
                            Em um recipiente a parte coloque o fubá
                            Aos poucos vá misturando o leite fervente com o fubá, mexendo sempre
                            para não empelotar, após misturar todo o leite com o fubá, deixe descansar um
                          pouco (para esfriar)
                          Acrescente os ovos já batidos ao mingau de fubá e mexa bem
                          Por último acrescente o queijo e coloque em uma assadeira untada com bastante óleo
                           Leve ao forno por 40 minutos e se acabe de comer depois
                        </p>
                        <aside className="imagem">
                            <img src="imagens/sopaparaguaia2.jpg" />
                            <p><b>Sopa Paraguaia</b></p>
                        </aside>

                    </div>
                </div>
            </div>
        );
    }

}
export default Receita5;