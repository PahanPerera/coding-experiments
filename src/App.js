import TowerOfHanoi from "./tower-of-hanoi/Main";
import Home from "./home/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/tower-of-hanoi">
            <TowerOfHanoi />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
