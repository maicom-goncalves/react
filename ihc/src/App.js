import React, { Component } from 'react';

import './App.css';
import Banner from './Banner';
import Menu from './Menu';

import Conteudo from './Conteudo';
import Lateral from './Lateral';
import Rodape from './Rodape';
import {
  BrowserRouter
} from 'react-router-dom';
import MenuNav from './MenuNav';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div>
            <div className="row">
              <div className="col" id="banner">
                <Banner />
              </div>
            </div>
            <div className="row">
              <div className="col" id="menuNav">
                <MenuNav />
              </div>
            </div>
            <div className="row">
              <div className="col" id="menu">
                <Menu />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2" id="lateral">
                <Lateral />
              </div>
              <div className="col-md-10" id="conteudo">
                <Conteudo />
              </div>
            </div>

            <div className="row">
              <div className="col" id="rodape">
                <Rodape />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
