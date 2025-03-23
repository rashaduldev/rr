"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const Nav = ({ session, isLoggedIn, userEmail }) => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${link.path === pathName ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
      {(session?.user || isLoggedIn) && (
        <Link
          href="/dashboard"
          className={`${pathName === "/dashboard" ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`}
        >
          dashboard
        </Link>
      )}
    </nav>
  );
};

export default Nav;