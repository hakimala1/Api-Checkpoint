
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Liste from './Components/Liste';
import Menu from './Components/Menu';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Menu/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
            <Route path={'/Liste'}element={<Liste/>}/>
            <Route path={'/Details/:userId'} element={<Details/>}/>
        </Routes>
    </div>
  );
}

export default App;
