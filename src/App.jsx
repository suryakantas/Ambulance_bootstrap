import './App.css';
import Topbar from "./component/topbar/Topbar"
import Home from "./component/home/Home"
import Services from './component/services/Services'
import Advertise from './component/advertise/Advertise';
import Success from './component/success/Success';
import Work from './component/work/Work';
import Testimonial from './component/testimonial/Testimonial';
import Contactus from './contactus/Contactus';


function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <Home/>
        <Services/>
        <Advertise/>
        <Success/>
        <Work/>
        <Testimonial/>
        <Contactus/>
      </div>
    </div>
  );
}

export default App;
