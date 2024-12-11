import useAppState from "@/hooks/useAppState";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { actions } = useAppState();
  const navigate = useNavigate();
  const handleLogin = () => {
    actions.login({
      name: "John Doe",

    });
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>
          Welcome to <span className="text-blue-500">Login</span>
        </h1>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
