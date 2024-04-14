import { Reducer } from "redux";
import { AuthActionTypes, AuthState, AuthTypes } from "../../types/auth/auth";

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

type ReducerType = Reducer<AuthState, AuthActionTypes>;

const reducer: ReducerType = (
  state = initialState,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        authLoading: false,
        isLoggedIn: true,
        user: {
          ...action.user,
        },
      };

    case AuthTypes.REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        authLoading: false,
        isLoggedIn: true,
        user: action.user,
      };

    case AuthTypes.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        authLoading: false,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
