import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalogo1 from './catalogo/Catalogo1';
import Catalogo2 from './catalogo/Catalogo2';
import Home from './Home';

class Conteudo extends Component {
    render() {
        return (
            <div id="all">
                <Switch>
                    <Route 
                        exact
                        path="/home"
                        component={Home}/> 
                    <Route
                        exact
                        path="/catalogo1"
                        component={Catalogo1} />
                    <Route
                        exact
                        path="/catalogo2"
                        component={Catalogo2} />
                       
                </Switch>
            </div>

        );
    }
}
export default Conteudo;