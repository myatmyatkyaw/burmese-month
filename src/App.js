
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Monthlist from './Monthlist';
import Monthdetail from './Monthdetail';
import Monthdetailheader from './Monthdetailheader';
import Home from './Home';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing option
      once: true // Whether animation should happen only once
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
            <Monthlist />
          </Route>
          
          <Route path="/month/:id">
            <Monthdetailheader />
            <Monthdetail />
          </Route>
        </Switch>
       
      </div>
      <Footer />
    </Router>
  );
}

export default App;
