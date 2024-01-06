
import './App.css';
import Home from './Page/Home';
import Header from './Page/Header';
import Domastic from './Page/Vehicle';
import Commercial from './Page/Commercial';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vehicle from './Page/Vehicle';
import Footer from './Page/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/vehicle" element={<Vehicle />} />
                <Route exact path="/Commercial" element={<Commercial/>} />
            </Routes>
            <Footer/>
    </div >
  );
}

export default App;
