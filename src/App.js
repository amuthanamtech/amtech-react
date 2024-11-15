import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import Header from './components/Header';
import Spinner from './components/Spinner';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import MissingPage from './pages/MissingPage';
import ScrollToTop from "./components/ScrollToTop";
import ArrowToTop from "./components/ArrowToTop";

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <ScrollToTop />
      <Header />
      <Spinner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage about={"About Us"}/>} />
        <Route path="/service" element={<ServicePage service={"Service"}/>} />
        <Route path="/project" element={<ProjectPage project={"Project"}/>} />
        <Route path="/contact" element={<ContactPage contact={"Contact"}/>} />
        <Route path='*' element={<MissingPage />} />
      </Routes>
      <ArrowToTop />
      <Footer />
      
    </div>
  );
}

export default App;

