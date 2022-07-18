import './App.css';
import { Routes, Route } from 'react-router-dom';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>React App</h1>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
