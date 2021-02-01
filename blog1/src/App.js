import React, { Component } from 'react';
import './App.scss';
import Banner from './Banner';
import Menu from './Menu';
import Conteudo from './Conteudo';
import Rodape from './Rodape';
import Guia from './Guia';
import {
  BrowserRouter
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <div className="row">
            <div className="col" id="banner">
              <Banner />
            </div>
          </div>
          <div className="row">
            <div className="col" id="guia">
              <Guia />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12" id="conteudo">
              <Conteudo />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12" id="rodape">
              <Rodape />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;