import './App.css';
import Home from './Component/Home/Home';
import AboutMe from './Component/AboutMe/AboutMe';
import Resume from './Component/Resume/Resume';
import Testimonial from './Component/Testimonial/Testimonial';
import ContactMe from './Component/ContactMe/ContactMe';
import ScrollToTop from './Component/ScrollToTop/ScrollToTop';




function App() {
    return (
    <div className="App">
     <Home/>
     <AboutMe/>
     <Resume/> 
     <Testimonial/>  
     <ContactMe/>
     <ScrollToTop scrollStepInPx="50" delayInMs = "10" />
    </div>
    );
   }

export default App;