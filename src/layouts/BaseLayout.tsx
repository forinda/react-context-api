import Header from "@/components/header";
import { Outlet } from "react-router-dom";

// type Props = {
//   children: React.ReactNode;
// };

export default function BaseLayout() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
