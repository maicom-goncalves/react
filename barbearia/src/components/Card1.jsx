import './Card1.css'
function Card1() {
  const now = new Date();
  return (
    <div className="card1">
      <h1>card</h1>
      <h2>{("Dia" + now.getDay())}</h2>
      <h2>{now.getHours()+" Horas"}</h2>
    </div>
  );
}

export default Card1;