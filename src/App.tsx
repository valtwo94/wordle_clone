import React from 'react';
import './App.css';
import Navbar from "./components/Header/Navbar/Navbar";
import Title from "./components/Text/Title/Title";

function App() {
  return (
    <div className="App">
     <Navbar>
       <Title>
         Wordle
       </Title>
     </Navbar>
    </div>
  );
}

export default App;
