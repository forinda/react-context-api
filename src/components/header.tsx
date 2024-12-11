import { navigationLinks } from "@/data/header-links";
import useAppState from "@/hooks/useAppState";
import { Link } from "react-router-dom";

export default function Header() {
  const { isAuthenticated, user } = useAppState();
  return (
    <div className="w-full border-b border-black p-4">
      {JSON.stringify(user)}
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="flex gap-4">
          {navigationLinks!["header"].right
            ?.filter(
              (link) =>
                link!.requiresAuth === isAuthenticated ||
                typeof link!.requiresAuth === "undefined"
            )
            .map((link) => (
              <Link key={link.href} to={link.href}>
                {link.title.toLowerCase().includes("profile")
                  ? user?.name
                  : link.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
