import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { API } from "./backend";
import Home from "./Core/Home";
import {ADD} from "./Context/actions.type"
import selectedBooksReducer from "./Context/reducer";
import { SelectedBooksContext } from "./Context/SelectedBooksContext";

const Routes = () => {
  const [selectedBooks, dispatch] = useReducer(selectedBooksReducer, []);

  const fetchBooksDetails = async () => {
    if (
      sessionStorage.getItem("booksDetails") === null ||
      sessionStorage.getItem("booksDetails") === "undefined"
    ) {
      try {
        const { data } = await Axios.get(API);
        sessionStorage.setItem("booksDetails", JSON.stringify(data));
      } catch (error) {
        console.log("cannot connect to internet");
      }
    }
  };


  useEffect(() => {
    fetchBooksDetails();
  }, []);

  return (
    <Router>
      <Switch>
        <SelectedBooksContext.Provider value={{ selectedBooks, dispatch }}>
          <Route exact path="/" component={Home} />
        </SelectedBooksContext.Provider>
      </Switch>
    </Router>
  );
};

export default Routes;
