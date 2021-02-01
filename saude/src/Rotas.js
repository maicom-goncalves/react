import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Formulario1 from './pages/formularios/Formulario1';
import Formulario2 from './pages/formularios/Formulario2.js';
import CriarFormulario from './pages/formularios/CriarFormulario';
import EditarFormulario from './pages/formularios/EditarFormulario';
import ROTAS from './constants/rotas';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROTAS.INICIO} component={Formulario1} />
            <Route exact path={ROTAS.FORMULARIO2} component={Formulario2} />
            <Route exact path={ROTAS.CRIAR_FORMULARIO} component={CriarFormulario} />
            <Route exact path={ROTAS.EDITAR_FORMULARIO} component={EditarFormulario} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;