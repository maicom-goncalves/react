import React,{Component }from'react';
import{Link} from 'react-router-dom';
class Menu extends Component{
    render(){
        return(
            <div id="menu">
             <ul>
                   <li><button id="botao"> <Link to="/Home"><b>HOME</b></Link></button></li>
                   <li><button id="botao"> <Link to="/Receita1"><b>BOLO-DE-FUBA</b></Link></button></li>
                   <li><button id="botao"> <Link to="/Receita2"><b>COSTELA</b></Link></button></li>
                   <li><button id="botao"> <Link to="/Receita3"><b>SUSHI</b></Link></button></li>
                   <li><button id="botao"> <Link to="/Receita4"><b>FUNDUE</b></Link></button></li>
                   <li><button id="botao"> <Link to="/Receita5"><b>SOPA-PARAGUAIA</b></Link></button></li>
                   <li><button id="botao"> <Link to="/Receita6"><b>PAMONHA</b></Link></button></li>
            </ul>
            </div>
        );
    }

}
export default Menu;