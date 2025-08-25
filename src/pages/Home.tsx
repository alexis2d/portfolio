import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center mt-10">
      <h2 className="text-4xl font-bold text-indigo-400">Hello 👋</h2>
      <p className="mt-4 text-lg">
        Bienvenue sur mon espace à moi, <span className="font-semibold">Alexis Duquenet</span>, développeur web passionné.<br></br>
        Ma passion c'est la création, et le code est mon outil le plus précieux.
      </p>
      <div className="mt-6 space-x-4">
        <Link to="/projects" className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded button">
          Voir mes projets
        </Link>
        <Link to="/contact" className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded button">
          Me contacter
        </Link>
      </div>
    </section>
  );
}
