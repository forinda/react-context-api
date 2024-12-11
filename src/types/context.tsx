import { AuthState, ReducerActionTypes } from "./auth";

export type AuthContextState = {
  state: AuthState | null;
  dispatch: React.Dispatch<ReducerActionTypes> | null;
};
