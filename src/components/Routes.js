import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Machine from "components/Machine";

const BasicExample = () => (<Router>
  <div>
    <Route exact path="/" component={Machine}/>
  </div>
</Router>);
export default BasicExample;
