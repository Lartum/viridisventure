import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import UploadForm from './components/UploadForm'
import { Head } from './components/Layout'
import Contact from './components/Contact'
import Home from './components/Home'
import Catalogue from './components/Catalogue'

function App() {
  return (
        <Router> 
           <Head />
           <Switch> 
              <Route path='/' exact component = { Home }/>
           </Switch>
           <Switch> 
              <Route path='/catalogue' exact component = { Catalogue }/>
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
