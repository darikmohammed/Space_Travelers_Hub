import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import Nav from './Components/Nav/Nav';
import getRocketDatas from './Redux/Rockets/rocketAPI';
import getMissionsData from './Redux/Missions/missionsAPI';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketDatas());
    dispatch(getMissionsData());
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
