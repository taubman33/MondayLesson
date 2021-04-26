import React, {useState} from 'react'
import './App.css';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'



function App() {
  return (
    <div className="App">
      
        <div className ="App-Header">
          <Header />
        </div>

        <div className ="App-Main">
          <Main/>
        </div>


        <div className ="App-Footer">
          <Footer/>
        </div>


    </div>
  );
}

export default App;
