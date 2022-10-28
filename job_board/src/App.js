import './App.css';
import Userdata from './Pages/Userdata';
import Navigation from './Components/Navigation'
import Home from './Components/Home';
import Error_404 from './Pages/Error/Error_404'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Errorboundry from './Pages/Error/Errorboundary'
function App() {
  return (
    <Router className="wrapper">
      <Errorboundry >
      <Routes>
          <Route path='*' element={<Error_404 />} ></Route>
          <Route exact path='/' element={ <><Navigation /> < Home /></> }></Route>
          <Route exact path='/Randomuser' element={<><Navigation /> < Userdata /></>}></Route>
      </Routes>
      </Errorboundry>
       
    </Router>
  );
}

export default App;
