import { lazy, Suspense } from "react";
import Home from "./home/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyToastPage from "./my-toast/Main";
import TodoAppRedux from "./todo-app-redux/Main";

const TowerOfHanoi = lazy(() => import("./tower-of-hanoi/Main"));

function App() {
  return (
    <Router>
      <main className={"main"}>
        <Switch>
          <Route path="/tower-of-hanoi">
            <Suspense fallback={<div>Loading...</div>}>
              <TowerOfHanoi />
            </Suspense>
          </Route>
          <Route path="/my-toast">
            <MyToastPage />
          </Route>
          <Route path="/todo-app-redux">
            <TodoAppRedux />
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
