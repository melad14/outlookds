
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Interactive from './Components/Pages/Interactive.jsx';
import DigitalServices from './Components/Pages/DigitalServices.jsx';
import AudioSystems from './Components/Pages/AudioSystems.jsx';
import LedScreens from './Components/Pages/LedScreens.jsx';
import Services from './Components/Services/Services.jsx';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Services />} />
          <Route path="interactive" element={<Interactive />} />
          <Route path="DigitalServices" element={<DigitalServices />} />
          <Route path="AudioSystems" element={<AudioSystems />} />
          <Route path="LedScreens" element={<LedScreens />} />
     
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
