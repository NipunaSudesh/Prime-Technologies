import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ServicePage } from './Pages/ServicePage';
import { ContactUsPage } from './Pages/ContactUsPage';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/contact" element={<ContactUsPage />} />
    </Routes>
  </Router>

  );
}

export default App;
