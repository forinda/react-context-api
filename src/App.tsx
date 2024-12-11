import { RouterProvider } from "react-router-dom";
import router from "@/router";
import ContextLayout from "./layouts/ContextLayout";

export default function App() {
  return (
    <ContextLayout>
      <RouterProvider router={router} />
    </ContextLayout>
  );
}
