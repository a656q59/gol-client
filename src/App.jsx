import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/Homepage';
import Homepage2 from './pages/homepage2';
import Footer from './components/footer';
import SamplePage from './pages/samplePage';
import { Route,Routes} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Packages from './pages/Packages';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route  path="/" element={<Homepage2 />}/>
      <Route  path="/aboutus" element={<AboutUs />}/>
      <Route  path="/packages" element={<Packages />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
