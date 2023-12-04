import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contact from './components/Contact';
// import DeshBoard from './admin/DeshBoard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/project' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
      {/* <DeshBoard /> */}
    </>
  );
}

export default App;
