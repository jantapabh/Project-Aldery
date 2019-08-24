import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main'
import Sheet from './components/Sheet';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
      
          <Route 
            exact
            path="/main"
            component={Main}
          />

          <Route 
            exact
            path="/sheet"
            component={Sheet}
        
          />
      
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
