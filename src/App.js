import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configStore';
import Header from './components/Navbar';
import Home from './components/Rockets/Home';
import Missions from './components/Missions/Missions';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
