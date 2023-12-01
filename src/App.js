import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Empty from './page/Empty';
import Home from './page/Home';
import About from './page/Rabout';
import Resume from './page/Resume';
import Footer from './common/Footer';
import Contactus from './page/Contactus';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Empty />} />
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
          <Route path='contact' element={<Contactus />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
