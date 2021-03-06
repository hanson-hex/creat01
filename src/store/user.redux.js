const initialState = {
  isLogin: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'login':
      return { isLogin: true }
    default:
      return state
  }
}

// for redux-thunk
export function login() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'login' })
    }, 1000)
  }
}

// // for saga
// export function login() {
//   return { type: 'login_request' }
// }