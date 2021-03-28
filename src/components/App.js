import React from 'react';
import Header from './Header';
import Footer from './Footer';
import signupdata from './signupdata';
import display from './display';
import {BrowserRouter,Route} from 'react-router-dom';
import mapbox from './mapbox';


const App = () => {
    
    return (
      <BrowserRouter>
        <Header/>
        
      <Route path='/' component={signupdata}/>
      <Route path='/display' component={display}/>
      <Route path='/mapbox' component={mapbox}/>

      <hr/>
      <Footer/>
         </BrowserRouter>
    )
  }

export default App;
