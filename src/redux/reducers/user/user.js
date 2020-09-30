const initialState = {
  loggedIn: false,
  id: "",
  name: "",
  email: "",
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_START_SESSION":
      return {
        loggedIn: true,
        ...action.payload,
      }

    case "USER_END_SESSION":
      return initialState

    default:
      return state
  }
}

export default userReducer
