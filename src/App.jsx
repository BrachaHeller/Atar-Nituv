import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';




function App() {





  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<Design />} >
          <Route path="font-color" element={<FontColor />} />
          <Route path="background-color" element={<BackgroundColor />} />
          <Route path="font-size" element={<FontSize />} />
        </Route>

      </Routes>



    </div>

  );
}

export default App;
