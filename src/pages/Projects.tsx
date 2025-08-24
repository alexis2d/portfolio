import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">Mes Projets</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="https://github.com/alexis2d/portfolio" target="_blank">
          <div className="bg-gray-600 hover:bg-gray-500 dark:bg-gray-200 dark:hover:bg-gray-100 rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-bold text-gray-200 dark:text-gray-800">Portfolio</h3>
            <p className="text-gray-100 dark:text-gray-700">
              Bah oui, on est dessus, mais bon...<br></br><br></br>
              En tout cas, j'ai réalisé ce portfolio avant tout pour m'introduire à React, mais également pour avoir un endroit où je peux partager mes créations.<br></br><br></br>
              Réalisé avec React, TypeScript et TailwindCSS.
            </p>
          </div>
        </Link>
        <Link to="https://github.com/alexis2d/KHWatchFace" target="_blank">
          <div className="bg-gray-600 hover:bg-gray-500 dark:bg-gray-200 dark:hover:bg-gray-100 rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-bold text-gray-200 dark:text-gray-800">KHWatchFace</h3>
            <p className="text-gray-100 dark:text-gray-700">
              Quand on s'achète un nouveau jouet, nous les développeurs on veut absolument avoir NOTRE version...<br></br><br></br>
              Du coup, j'ai créé ma propre watchface à l'image de ma licence de jeu vidéo préférée dès que j'ai acheté ma smartwatch.<br></br><br></br>
              Réalisé avec le récent WatchFaceFormat de Google (en gros, principalement du XML), pour WearOS.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
