import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Motzarim from './components/Motzarim';

function App() {
  const [motzarim, setmotzarim]= useState ([
  {  id: 1, code:100, name: "mekupelet", price: 4, img: 'deafult.jpg' }
  ])






  return (
    <div>
      <div className='massage'>ברוכים הבאים</div>
      <div className='right machine'>
        {/* קומפוננטה ראשונה - שלום למשתמש*/}
        <div className='hello'> </div>
           {/* קומפוננטה שניה - מטבעות שהלקוח מכניס*/}
           <div className=''></div>


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
