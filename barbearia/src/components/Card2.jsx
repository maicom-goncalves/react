import React from 'react';
import './Card2.css'
function Card2(props) {
  const [checked, setChecked] = React.useState(true);
  const [reserv, setReservado] = React.useState(true);
  

 
  const onReserv = reserv => {
    setReservado(reserv);
    if (reserv !== null) {
      setReservado(!reserv);
      //service.salvar(reserv);
      reserv = null;
      
    }
    console.log(reserv);
  };

  return (
    <div className="card">
      <h1>{checked}</h1>
      <h3>{props.hora}</h3>
      <label   onReserv={onReserv}>
      <input type="checkbox" className="checkbox2"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <b>Reservar</b>
      <button onClick={() => setReservado(!reserv)} className="botao">reservar</button>
    </label>  
      
    </div>
  );
}

export default Card2;