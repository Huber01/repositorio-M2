import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';


function App() {
  return (
    <div className="App">
      <div className>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    
      <div>
        <Card
          onClose={() => alert(Cairns.name)}
          name={Cairns.name}
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          img={Cairns.weather[0].icon}
         
        />
      </div>
      <hr />
      <div className >
        <Cards
          cities={data}
        />
      </div>
      <hr />
      
    </div>
  );
}

export default App;
