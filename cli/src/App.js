import View from "./View";
import Edit from "./Edit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={View} />
          <Route path="/edit" exact component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
