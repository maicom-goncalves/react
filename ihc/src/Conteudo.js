import React,{Component }from'react';
import{
    Switch,
    Route,
    Redirect
  }from 'react-router-dom';
  import Home from './Home';
  import Pagina1 from './Pagina1';
  import Pagina2 from './Pagina2';
  import Pagina3 from './Pagina3';
  import Pdoacao from './Pdoacao';
  import Galeria1 from './Galeria1'
  import Galeria2 from './Galeria2'
  import Quem from './Quem'

  
class Conteudo extends Component{
    render(){
        return(
            <Switch>
             <Route name="home" path="/Home" component={Home}/>
             <Route name="pagina1" path="/Pagina1" component={Pagina1}/>
             <Route name="pagina2" path="/Pagina2" component={Pagina2}/>
             <Route name="pagina3" path="/Pagina3" component={Pagina3}/>
             <Route name="pdoacao" path="/Pdoacao" component={Pdoacao} />
             <Route name="quem" path="/Quem" component={Quem} />
             <Route name="galeria1" path="/Galeria1" component={Galeria1}/>
             <Route name="galeria2" path="/Galeria2" component={Galeria2}/>

             <Redirect from="/*" to="home"/>
         </Switch>
        );
    }

}
export default Conteudo;