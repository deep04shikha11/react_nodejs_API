import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/login';
import Emp from './pages/emp';
import NewEmpAdd from './pages/empAdd';
import Register from './pages/register';
import DashBoard from "./pages/dashboard";
import Header from './components/header';
function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container my-5">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/emp" component={Emp} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/empadd" component={NewEmpAdd} />
          <Route exact path="/dashBoard" component={DashBoard} />
          <Redirect to="/login" />
        </Switch>

      </div>
    </React.Fragment>
  );
}

export default App;
