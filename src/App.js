import './App.css';
import { Routes, Route } from 'react-router-dom';
import Rockets from './routes/rockets';
import Missions from './routes/missions';
import MyProfile from './routes/MyProfile';

function App() {
  return (

    <div className="App">
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
