/**
 * Checks the store to see if a valid auth token exists
 * at "auth.token".  If false, they are redirected to the
 * login page.
 *
 * @param  {Object}  store
 * @return {Function}
 */
export function isLoggedIn (store) {
  let state = store.getState();
  if ( ! state.user.uid) {
    return false;
  }
  return true;
}
