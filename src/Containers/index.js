import * as React from "react";
import {Router, withRedirect} from "stateside";
import { Provider } from "react-redux";
import Login from "./Login";
import Blackjack from "./Blackjack";
import NotFound from "../Components/NotFound"
import '../App.styl';


export default function Main({ store }) {

  const isGuest = function () {
    var guest = (!store.getState().user.uid);
    return guest;
  }

//had this for some reason, ask Nick
// return "/login?postlogin=" + window.location.href;

  const MustBeLoggedIn = withRedirect(function () {
    if (isGuest()) {
      return "/login";
    }
    return null;
  })("div");

  return (
    <Provider store={store}>
      <Router onlyShowFirst>
        <Login route="/login" />
        <Router route="/" partialRoute onlyShowFirst component={MustBeLoggedIn}>
          <Blackjack route="/" />
          <NotFound defaultRoute />
        </Router>
      </Router>
    </Provider>
  );
}