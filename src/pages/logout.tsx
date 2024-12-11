/* eslint-disable react-hooks/exhaustive-deps */
import useAppState from "@/hooks/useAppState";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { actions } = useAppState();
  const navigate = useNavigate();
  useEffect(() => {
    actions.logout();
    navigate("/");
  }, []);
  return <></>
}
