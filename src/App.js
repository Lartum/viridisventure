import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import UploadForm from './components/UploadForm'
import { Head, Home } from './components/Layout'
import Contact from './components/Contact'


function App() {
  return (
        <Router> 
           <Head />
           <Switch> 
              <Route path='/' exact component = { Home }/>
           </Switch>
           <Switch> 
              <Route path='/upload' exact component = { UploadForm }/>
           </Switch>
           <Switch> 
              <Route path='/contact' component = { Contact }/>
           </Switch>
       </Router>
       
  );
}

export default App;
