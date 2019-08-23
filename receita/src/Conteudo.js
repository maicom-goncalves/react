import React,{Component }from'react';
import{
    Switch,
    Route,
    Redirect
  }from 'react-router-dom';
  import Home from './Home';
  import Receita1 from './Receita1';
  import Receita2 from './Receita2';
  import Receita3 from './Receita3';
  import Receita4 from './Receita4';
  import Receita5 from './Receita5';
  import Receita6 from './Receita6';

  
class Conteudo extends Component{
    render(){
        return(
            <Switch>
             <Route name="home" path="/Home" component={Home}/>
             <Route name="receita1" path="/Receita1" component={Receita1}/>
             <Route name="receta2" path="/Receita2" component={Receita2}/>
             <Route name="receta3" path="/Receita3" component={Receita3}/>
             <Route name="receta4" path="/Receita4" component={Receita4}/>
             <Route name="receta5" path="/Receita5" component={Receita5}/>
             <Route name="receta6" path="/Receita6" component={Receita6}/>
             <Redirect from="/*" to="home"/>
         </Switch>
        );
    }

}
export default Conteudo;