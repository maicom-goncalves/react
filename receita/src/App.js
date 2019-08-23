import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Menu from './Menu';

import Conteudo from './Conteudo';
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
           
            <div className="col-md-9" id="conteudo">
              <Conteudo />
            </div>
            <div className="col-md-3" id="menu">
              <Menu />
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
