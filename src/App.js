
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Monthlist from './Monthlist';
import Monthdetail from './Monthdetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Monthlist />
          </Route>
          <Route path="/month/:id">
            <Monthdetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
