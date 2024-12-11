// import { Links } from "@/types/links";

import { Links } from "@/types/links";

export const navigationLinks:Links = {
  header: {
    left: [
      {
        href: "/",
        title: "Home",

      },
    ],
    right: [
      {
        href: "/about",
        title: "About",
        
      },
      {
        href: "/login",
        title: "Login",
        requiresAuth: false,
      },
      {
        href: "/register",
        title: "Register",
        requiresAuth: false,
      },
      {
        href: "/dashboard",
        title: "Dashboard",
        requiresAuth: true,
      },
      {
        href: "/profile",
        title: "Profile",
        requiresAuth: true,
      },
      {
        href: "/logout",
        title: "Logout",
        requiresAuth: true,
      },
    ],
  },
}
