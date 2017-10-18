import Api from '../Services/Adapter';

/**
 * Creates a user account
 * @param email
 * @param password
 * @param cb
 * @returns {function(*)} dispatch
 */
export function createUser (email, password, userName, cb) {
    return (dispatch) => {
      Api().Auth.createUserAccount(email, password, (success) => {
        dispatch({ type: 'SUCCESS_MESSAGE', message: 'Account created successfully.' });
        createIdentityInstance(success.uid, userName)(dispatch);
        cb(success);
        console.log('success: ', success);
      });
    };
  }

/**
 * Logs into user's account
 * @param {string} email - user email
 * @param {string} password - user account password
 * @returns {function} dispatch
 */
export function loginUser (email, password) {
    return (dispatch) => {
      Api().Auth.loginUser(email, password, (success) => {
        dispatch({ type: 'SUCCESS_MESSAGE', message: 'Account logged in successfully.', id: success.uid });
        retrieveUser(success.uid)(dispatch);
      });
    };
}

export function checkUser () {
    return (dispatch) => {
        Api().Auth.checkUser((user) => {
            if (user) {
              console.log('LOGGED IN: ', user);
              dispatch({ type: 'SET_CURRENT_USER', uid: user.uid });
              retrieveUser(user.uid)(dispatch);
            } else {
            console.log('No one here');

            // console.log(currentRoute);
            // if (currentRoute !== '/reset-password') {
            //     browserHistory.push(`/login`);
            // }
            }
        });
    }
}

/**
 * Logs out of user's account
 * @returns {function} dispatch
 */
export function logoutUser () {
    return (dispatch) => {
      Api().Auth.logoutUser((success) => {
        dispatch({ type: 'SUCCESS_MESSAGE', message: 'User logged out successfully.' });
        dispatch({ type: 'USER_LOGOUT' });
      });
    };
}


/**
 * Creates a user identity object and adds it to the Database
 * @param {string} uid - user unique id
 * @param {string} userName - user first name
 * @param {string} lastName - user last name
 * @param {string} email - user email address
 * @returns {function} dispatch
 */
export function createIdentityInstance (uid, userName) {
  return (dispatch) => {
    const identity = {
      id: uid,
      user_name: userName
    };
    Api().Database.create(`user/${uid}`, identity, () => {
      dispatch({ type: 'SUCCESS_MESSAGE', message: 'User created successfully.' });
      retrieveUser(uid)(dispatch);
    });
  };
}

/**
 * Retrieves a user's profile information by their
 * unique id.
 * @param {string} uid - user unique id
 * @returns {function} dispatch
 */
export function retrieveUser (uid) {
  return (dispatch) => {
    Api().Database.read(`user/${uid}`, (identity) => {
      dispatch({ type: 'SUCCESS_MESSAGE', message: 'User retrieved successfully.' });
      dispatch({ type: 'IDENTITY_RETRIEVED', currentUser: identity });
    });
  };
}