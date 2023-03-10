import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import HomeCom from './components/Home/Home';
import AboutCom from './components/About/AboutCom';
import ProjectCom from './components/Project/ProjectCom';
import ContactusCom from './components/Contactus/ContactusCom';
import PortfolioCom from './components/Portfolio/PortfolioCom';

function App() {

  const changeCom = () => {

  }

  return (
    <Router>
      <div className="App">
        <Loader />
        <Navbar changeMenu={changeCom} />
        <Routes>
          <Route path="/" element={<HomeCom />} />
          <Route path="/About" element={<AboutCom />} />
          <Route path="/Portfolio" element={<PortfolioCom />} />
          <Route path="/Project" element={<ProjectCom />} />
          <Route path="/ContactUs" element={<ContactusCom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;