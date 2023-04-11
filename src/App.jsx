import './App.css';
import Navbar from './components/navbar';
import Homepage2 from './pages/homepage2';
import Footer from './components/footer';
import { Route,Routes} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Packages from './pages/Packages';
import TestComponent from './components/TestComponent';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import BannerChange from './pages/BannerChange';
import NewUser from './pages/NewUser';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <TestComponent/> */}
     <Routes>
      <Route  path="/" element={<Homepage2 />}/>
      <Route  path="/aboutus" element={<AboutUs />}/>
      <Route  path="/packages" element={<Packages />}/>
      <Route  path="/login" element={<LoginPage />}/>
      <Route  path="/admin" element={<AdminPage />}/>
      <Route  path="/bannerchange" element={<BannerChange />}/>
      <Route  path="/newuser/:id"element={<NewUser />}
      />
      <Route  path="/signup" element={<SignUp />}/>
      
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
