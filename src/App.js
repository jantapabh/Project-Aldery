import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main'

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
      
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
