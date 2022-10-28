import './App.css';
import Userdata from './Pages/Userdata';
import Navigation from './Components/Navigation'
import Home from './Components/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router className="wrapper">
       <Navigation />
      <Routes>
          <Route exact path='/Home' element={< Home />}></Route>
          <Route exact path='/Randomuser' element={< Userdata />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
