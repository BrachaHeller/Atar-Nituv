import React, { useState } from 'react'

const CodMotzar = () => {
  const [motsarimCode, setMotsarimCode] = useState("")
  const [motsarNircash, setMotsarNircash] = useState()
  // פונקציה שממירה את מחרוזת המספרים שהתקבלו לקוד מספרי וגם מודיעה לרוכש שהצליח לקנות - בהמשך צריך להחליף את האלרט להעברה לקומפוננטה של המילים
  const buy = () => {
    const code = Number(motsarimCode);
    alert("קוד מוצר " + code);
    alert("רכשת את מוצר ?????")

  }
  return (
    <div>

      <div className='coins'>
        <button onClick={() => { setMotsarimCode(motsarimCode + 1) }}>1</button>
        <button onClick={() => { setMotsarimCode(motsarimCode + 2) }}>2</button>
        <button onClick={() => { setMotsarimCode(motsarimCode + 3) }}>3</button>
        <button onClick={() => { setMotsarimCode(motsarimCode + 4) }}>4</button>
        <button onClick={() => { setMotsarimCode(motsarimCode + 5) }}>5</button>
        <button onClick={() => { setMotsarimCode(motsarimCode + 6) }}>6</button>
        <button onClick={() => { setMotsarimCode(motsarimCode + 7) }}>7</button>
        <button onClick={() => { setMotsarimCode(motsarimCode + 8) }}>8</button>
        <button onClick={() => { setMotsarimCode(motsarimCode + 9) }}>9</button>
        <button onClick={() => { setMotsarimCode("") }}>נקה</button>
        <button onClick={() => { buy() }}>קנה</button>
      </div>
    </div>
  )
}

export default CodMotzar