import './App.css';
import Signup from './components/Signup-Page'
import Login from './components/Login-page';
import {Routes, Route} from 'react-router-dom'
import MainContent from './components/MainContent';


function App() {
  return (
    <div className="">
      <div className=''>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MainContent" element={< MainContent/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

