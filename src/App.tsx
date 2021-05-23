import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Results from "./components/pages/Results";
import EmptyPage from "./components/pages/EmptyPage";
import AppProvider from "./context/appContext";

function App(): JSX.Element {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
          <div
            style={{
              paddingTop: "70px",
              paddingLeft: "365px",
              maxWidth: "calc(100%-360px)",
            }}
          >
            <Switch>
              <Route exact path="/" component={EmptyPage} />
              <Route exact path="/results" component={Results} />
            </Switch>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
