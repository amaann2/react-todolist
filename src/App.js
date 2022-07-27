
import './App.css';
import Todo from './component/Todo';
import Navbar from './component/Navbar';
import { Crypto } from './component/crypto app/Crypto';
import {  BrowserRouter as Router, Switch,Route,} from "react-router-dom";

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/todo"><Todo /></Route>
          <Route exact path="/"><Crypto /></Route>
        </Switch>
      </Router>


    </>

  );
}

export default App;
