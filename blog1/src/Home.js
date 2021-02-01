import React, { Component } from 'react';
import conteudo from '../src/img/conteudo-img.jpg';
class Home extends Component {
    render() {
        return (
            <div id="home">
            
            <h2>
                Confira nossas historias de terror de hoje
              Toda semana as segundas trazemos historias ineditas de terror
            </h2> 
            <img src={conteudo} /><br/>
            </div>
        );
    }

}
export default Home;