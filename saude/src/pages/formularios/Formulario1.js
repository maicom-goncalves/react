import React, { PureComponent } from 'react'
import saude from '../../img/icone-formu.png';
import './formularios.scss';

class Formulario1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="conteiner">
                <form name="meuForm" method="post" id="formulario">

                    <img src={saude} />
                    <h1>FICHA DE PACIENTE</h1>
                    <div className="box1">
                        <label className="escrito">
                            <span>Nome Completo</span>
                            <input type="text" class="input_text" name="nome" id="name" />
                        </label>
                        <label className="opcao">
                            <b>sexo:</b><br />
                            <ul>
                                <li>F:<input type="radio" id="female" value="female"></input></li>
                                <li>M:<input type="radio" id="male" value="male"></input></li>
                            </ul>
                        </label>
                    </div>
                    <div className="box2">
                        <label className="escrito">
                            <span>Numero de pessoas na casa</span>
                            <input type="text" class="input_text" name="nome" id="name" />
                        </label>
                        <label className="escrito">Nome:
                        <input type="text" id="nome" name="usuario_nome" />
                        </label>
                    </div>
                    <div className="box1">
                        <label className="escrito">
                            <span>Email</span>
                            <input type="text" class="input_text" name="email" id="email" />
                        </label>

                        <label className="escrito">
                            <span>Assunto</span>
                            <input type="text" class="input_text" name="assunto" id="subject" />
                        </label>
                    </div>
                    <div className="box2">
                        <label className="escrito">
                            <span>Observações</span>
                            <textarea class="message" name="feedback" id="feedback"></textarea>

                        </label>
                    </div>
                    <div className="box1">
                        <label className="opcao">
                            ALERGICO: <input type="checkbox" id="vehicle2" name="vehicle2" value="alergia" />

                        </label>
                    </div>
                    <div className="box2">
                        <label className="escrito">
                            <span>Numero de pessoas na casa</span>
                            <input type="text" class="input_text" name="nome" id="name" />
                        </label >
                        <label className="escrito">Observações:
                        <input type="text" id="observacao" name="observacoes" />
                        </label>
                    </div>
                    <div className="box1">
                        <label className="opcao">
                            Exames Feitos: <input type="checkbox" id="vehicle2" name="vehicle2" value="alergia" />
                            <br/>
                            <input type="button" class="button" value="Enviar" />
                        </label>
                    </div>

                </form>
            </div>
        )
    }
}

export default Formulario1