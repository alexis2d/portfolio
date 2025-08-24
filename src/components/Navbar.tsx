import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Accueil" },
    { path: "/projects", label: "Projets" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-gray-800 shadow-md z-50">
      <h1 className="text-2xl font-bold text-indigo-400">Alexis2D</h1>
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-row justify-center">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`${
              location.pathname === path ? "text-indigo-400" : "hover:text-indigo-400"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
