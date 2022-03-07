import './App.css';
import Cabecalho from './components/Cabecalho';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
function App() {
  return (
    <div className="app">
      <Cabecalho />
      <Card1 />
      <h2>Agende seu horario</h2>
      <Card2 hora="09:00 horas"/>
      <Card2 hora="10:00 horas"/>
      <Card2 hora="11:00 horas"/>
      <Card2 hora="13:00 horas"/>
      <Card2 hora="14:00 horas"/>
      <Card2 hora="15:00 horas"/>
      <Card2 hora="16:00 horas"/>
      <Card2 hora="17:00 horas"/>
      <Card2 hora="18:00 horas"/>
      <Card2 hora="19:00 horas"/>
    </div>
  );
}

export default App;
