import './App.css';
import Community from './Component/Community/Community';
import Home from './Component/Home/Home';
import Map from './Component/Map/Map';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/community' element={<Community/>}/>
          <Route path='/map' element={<Map/>}/>
        </Routes>
    </div>
  );
}

export default App;
