export type UserType = {
  name: string;
};

export type AuthState = {
  user?: UserType;
  isAuthenticated: boolean;
};

export type AuthActions = {
  login: (user: UserType) => {
    type: "LOGIN";
    payload: UserType;
  };
  logout: () => {
    type: "LOGOUT";
  };
};


export type ReducerActionTypes = ReturnType<AuthActions[keyof AuthActions]>;
