import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NumberOrWord from './components/NumberOrWord';

function App() {
  return (
    <BrowserRouter>
      <div className="App mt-5">
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/:input">
            <NumberOrWord></NumberOrWord>
          </Route>
          <Route exact path="/:input/:wordColor">
            <NumberOrWord></NumberOrWord>
          </Route>
          <Route exact path="/:input/:wordColor/:bgColor">
            <NumberOrWord></NumberOrWord>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
