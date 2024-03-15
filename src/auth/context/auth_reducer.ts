import { types } from "../types/types";

// interface Action {
//   type?: string;
//   payload: object
// }

export const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
