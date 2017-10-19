import * as React from "react";
import {Router, withRedirect} from "stateside";
import { Provider } from "react-redux";
import Login from "./Login";
import Blackjack from "./Blackjack";

function NotFound() {
  return (
    <h1>Page Not Found</h1>
  );
}

export default function Main({ store }) {

  const isGuest = function () {
    var guest = (!store.getState().user.uid);
    console.log("user is guest?", guest);
    return guest;
  }

  const MustBeLoggedIn = withRedirect(function () {
    if (isGuest()) {
      return "/login?postlogin=" + window.location.href;
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