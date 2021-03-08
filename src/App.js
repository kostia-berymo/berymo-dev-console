import React from 'react';
import logo from './logo.svg';
import './App.css';
import SupportedCities from './SupportedCities';
import Mapbox from './mapbox';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Berymo dev console</h1>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/driverapi"/>
                )}/>
                 <Route exact path='/driverapi' component={SupportedCities} />
                 <Route exact path='/mapbox' component={Mapbox} />
          </Switch>
      </div>
    </Router>
    );
  }

export default App;
