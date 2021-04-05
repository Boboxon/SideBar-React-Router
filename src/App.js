import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Dashborard from "./Dashborard";
import Contact from "./Contact";
import Flow from "./Flow";
import Static from "./Static";
import Number from "./Number";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashborard />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/flow-builder">
            <Flow />
          </Route>
          <Route path="/statistics">
            <Static />
          </Route>
          <Route path="/number">
            <Number />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
