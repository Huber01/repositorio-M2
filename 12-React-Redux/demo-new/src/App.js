import './App.css';
import {Route, Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/Cards';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
    <Route path="/"> <Navbar/></Route> 
    <Switch>
      <Route path="/characters/:id">
        <Detail/>
      </Route>
      <Route path="/characters">
        <Cards/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>

    </div>
  );
}

export default App;
