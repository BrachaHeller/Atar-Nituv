import React, { useState } from 'react'

const Matbeot = () => {
  const [matbeot, setMatbeot] = useState(0)
    const [sachMoney, setSachMoney] = useState()
  
  //חסר לי פונקציה שתוסיף את המטבעות לא כמחרוזת אלא כאינט...
   const money = () => {
    const money = matbeot;
    alert(" סהכ הכנסת" + money + "שח");
    // לאפס את המטבעות
   }
  return (
    <div>
      <button onClick={() => {setMatbeot(matbeot + 1) }}>1</button>
      <button onClick={() => {setMatbeot(matbeot + 2) }}>2</button>
      <button onClick={() => { setMatbeot(matbeot + 5) }}>5</button>
      <button onClick={() => { setMatbeot(matbeot + 10) }}>10</button>
      <button onClick={()=> {money ()}}>סיימתי</button>
    </div>
  )
}

export default Matbeot