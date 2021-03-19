import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Catalogo1 from './pages/catalogo/Catalogo1.js';
import Catalogo2 from './pages/catalogo/Catalogo2.js';
import Home from './pages/Home.js';
import ROTAS from './constants/rotas';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route  path={ROTAS.INICIO} component={Inicio} />
            <Route exact={ROTAS.HOME} component={Home} />
            <Route exact path={ROTAS.CATALOGO1} component={Catalogo1} />
            <Route exact path={ROTAS.CATALOGO2} component={Catalogo2} />
           
        </Switch>
    </BrowserRouter>
);

export default Rotas;