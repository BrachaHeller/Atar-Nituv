import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Motzarim from './components/Motzarim';

import CodMotzar from './components/CodMotzar';
import Matbeot from './components/Matbeot';

import Wordsr from './components/Wordsr';



function App() {
  const [motzarim, setmotzarim] = useState([
    { id: 1, code: 100, name: "mekupelet", price: 4, img: 'deafult.jpg' }
  ])






  return (
    <div>
      <div className='massage'>ברוכים הבאים</div>
      <div className='right machine'>
        {/* קומפוננטה ראשונה - שלום למשתמש*/}
        <div className='hello'> </div>
        {/* קומפוננטה שניה - מטבעות שהלקוח מכניס*/}
        <Matbeot/>
        <div className=''></div>
          {/* קומפוננטה שניה - מטבעות שהלקוח מכניס*/}
        <div className=''></div>
  {/* קומפוננטה קוד - קוד המוצר*/}
        <div className='code'></div>
        <CodMotzar/>



      </div>
      {/* קומפוננטה מילים  - הודעות לקונה*/}
      <div className='wordsr'>
        <Wordsr/>
      </div>
      {/* קומפוננטה מוצרים - המוצרים שנמצאים במכונה*/}
      <div className='motzarim'>
        <Motzarim list={motzarim} />
        {/* Motzarim תעביר את המוצרים לקומפוננטה עם השם list  */}
      </div>









    </div>

  );
}

export default App;
