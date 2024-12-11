import { AppContext } from "@/stores/context/app-context";
import { UserType } from "@/types/auth";
import { useContext, useMemo } from "react";

export default function useAppState() {
  const { state, dispatch } = useContext(AppContext);
  const user = useMemo(() => state!.user, [state]);
  const isAuthenticated = useMemo(() => state!.isAuthenticated, [state]);

  const login = (user: UserType) => {
    dispatch!({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    dispatch!({ type: "LOGOUT" });
  };
  return {
    user,
    isAuthenticated,
    actions: {
      login,
      logout,
    },
  };
}
