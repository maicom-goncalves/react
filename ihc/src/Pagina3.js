import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Pagina3 extends Component {
    render() {
        return (
            <div>

          <header className="cabec">
                    <h2><b>Fotos</b></h2>
                </header>
            <div id="galery">
                
                <div>
                    <button >
                    <b>Natal</b><br/>
                    <Link to="/Galeria1">
                    <img src="imagens/asilo-natal2.jpg" alt="natal-liria-da-paz1" />
                    </Link></button>
                </div>
                <div>
                    <button >
                     <b> Festa Junina</b><br/>
                    <Link to="/Galeria2">
                    <img src="imagens/festa-junina.jpg" alt="natal-liria-da-paz1" />
                    </Link></button>
                </div>
            </div>
            </div>  
        );
    }

}
export default Pagina3;