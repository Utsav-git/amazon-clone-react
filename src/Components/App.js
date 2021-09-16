import '../CSS/App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header'
import Home from './Home'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/'>
            <Header/>
            {/* <Slider/> */}
            <Home/>
          </Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
