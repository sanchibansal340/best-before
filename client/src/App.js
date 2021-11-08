import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Landing, Signup, Login, Dashboard, AddItem, PrivateRoute } from "./components";
import './App.css';
import AuthContextProvider from "./components/Context/AuthContext";

function App() {
    return (
        <Router>
          <div className="App">
            <AuthContextProvider>
              <Header />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/addItem" component={AddItem} />
              </Switch>
            </AuthContextProvider>
          </div>
        </Router>
    );
}

export default App;
