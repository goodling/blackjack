// import React from 'react';
// import { withRouter } from 'react-router';

import * as React from "react";
import { Router, withRedirect } from "stateside";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.styl';
import NotFound from './Components/NotFound';
import Login from './Containers/Login';
import Blackjack from './Containers/Blackjack';


class App extends React.PureComponent {


  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  isLoggedIn(){
    if(this.props.userId){
      return true;
    }
    return false
  }

  isGuest(){
    if(!this.props.userId){
      return true;
    }
    return false
  }

  render () {
    return (
      <Router onlyShowFirst>
        <Router route={this.isGuest()}>
          <Login route="/login" />
          <NotFound defaultRoute />
        </Router>
        <Router route="/" partialRoute component={LoggedInOnly}>
          <Blackjack route="/" />
          <NotFound defaultRoute />
        </Router>
      </Router>
    );
  }
}


const GuestOnly = withRedirect(function (props) {
  return (props.loggedIn ? "/" : null);
})(function ({ children }) {
  return (<div>{children}</div>);
});


const LoggedInOnly = withRedirect(function (props) {
  return (!props.loggedIn ? "/login" : null);
})(function ({ onLogout, children }) {
  return (<div>{children}</div>);
});


function mapStateToProps (state) {
  return {
    userId: state.user.uid,
    test: "string"
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


// import React from 'react';
// import { withRouter } from 'react-router';

// import * as React from "react";
// import { Router, withRedirect } from "stateside";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import './App.styl';
// import NotFound from './Components/NotFound';
// import Login from './Containers/Login';
// import Blackjack from './Containers/Blackjack';

// class App extends React.PureComponent {
//   constructor (props, context) {
//     super(props, context);
//     this.state = {};
//   }

//   isLoggedIn(){
//     if(this.props.userId){
//       return true;
//     }
//     return false
//   }

//   render () {
//     return (
//       <div>
//         <Router
//           loggedIn={this.isLoggedIn()}
//           component={GuestOnly}>
//           <Login route="/login"  />
//           <NotFound defaultRoute />
//         </Router>
//         <Router
//           loggedIn={this.isLoggedIn()}
//           component={LoggedInOnly}>
//           <Blackjack route="/" />
//           <NotFound defaultRoute />
//         </Router>
//       </div>
//     );
//   }
// }


// const GuestOnly = withRedirect(function (props) {
//   return (props.loggedIn ? "/" : null);
// })(function ({ children }) {
//   return (<div>{children}</div>);
// });


// const LoggedInOnly = withRedirect(function (props) {
//   return (!props.loggedIn ? "/login" : null);
// })(function ({ onLogout, children }) {
//   return (<div>{children}</div>);
// });


// function mapStateToProps (state) {
//   return {
//     userId: state.user.uid,
//     test: "string"
//   };
// }

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators({
// }, dispatch);
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
