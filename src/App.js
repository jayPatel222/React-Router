import React, { Component } from 'react';
import Navbar from './components/navbar';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './components/home'
import about from './components/about'
import contact from './components/contact'
import post from './components/post'


class App extends Component{
  render() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
     <Switch>
     <Route exact  path='/' component={Home} />
     <Route  path='/about' component={about} />
     <Route  path='/contact' component={contact} />
     <Route  path='/:post_id' component={post} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
