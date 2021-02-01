import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import operacaoPrato from './operacaoPrato';
import Loronna from './Loronna';

class Conteudo extends Component {
    render() {
        return (
            <div>
                <div id="cambiar">
                    <h3>HISTORIAS DE TERROR</h3>
                    <button id="boton"> <Link to="/Home"><b>INICIO</b></Link></button>
                    <button id="boton"> <Link to="/operacaoPrato"><b>Operação Prato</b></Link></button>
                    <button id="boton"> <Link to="/Loronna"><b>La LLorona</b></Link></button>
                </div>
                <div id="historias">
                    <Switch>
                        <Route name="prato" path="/operacaoPrato" component={operacaoPrato} />
                        <Route name="Loronna" path="/Loronna" component={Loronna} />
                        <Route name="home" path="/Home" component={Home} />
                        <Redirect from="/*" to="home" />
                    </Switch>
                </div>
            </div>

        );
    }
}
export default Conteudo;