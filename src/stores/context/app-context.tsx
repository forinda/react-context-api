import { AuthState, ReducerActionTypes } from "@/types/auth";
import { AuthContextState } from "@/types/context";
import { createContext, useReducer } from "react";

const initialState: AuthState = {
  user: undefined,
  isAuthenticated: false,
};

const AppContext = createContext<AuthContextState>({
  dispatch: null,
  state: initialState,
});

type AppProviderProps = {
  children: React.ReactNode;
};

const reducerFunction = (state: AuthState, actions: ReducerActionTypes) => {
  switch (actions.type) {
    case "LOGIN":
      if (!actions.payload) return state;
      return {
        ...state,
        user: actions.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: undefined,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
