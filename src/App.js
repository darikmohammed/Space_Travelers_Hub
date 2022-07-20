import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import Nav from './Components/Nav/Nav';
import getRocketDatas from './Redux/Rockets/rocketAPI';

function App() {
  const dispatch = useDispatch();
  const storeRockets = useSelector((state) => state.rockets);
  console.log(storeRockets);
  useEffect(() => {
    dispatch(getRocketDatas());
  }, []);
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
