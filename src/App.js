import React from 'react'
import Main from './components/template/Main'
import Nav from './components/template/Nav'
import './App.css'
import 'bootstrap'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'


function App() {
  return (
    <HashRouter>

      <div className="App">

          <Nav/>
          
          <Main>
            <Routes/>
          </Main>
      
      </div>

    </HashRouter>
  );
}

export default App;
