import { createContext } from "react";

interface State {
  logged?: boolean;
  login: (name: string | null) => void;
  logout: () => void;
}

const initialState: State = {
  logged: false,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(initialState);
