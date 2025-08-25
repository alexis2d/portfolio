import { Link } from "react-router-dom";
import { useState } from "react";

export default function Projects() {
  const [activeDiv, setActiveDiv] = useState("work");

  return (
    <section className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">Mes Projets</h2>
      <div className="flex gap-2 mb-4 justify-center">
        <button 
          onClick={() => setActiveDiv("work")} 
          className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded"
        >
          Projets professionnels
        </button>
        <button 
          onClick={() => setActiveDiv("self")} 
          className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded"
        >
          Projets personnels
        </button>
        <button 
          onClick={() => setActiveDiv("school")} 
          className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded"
        >
          Projets scolaires
        </button>
      </div>
      {activeDiv === "work" && (
        <div>
        <Link to="https://www.emiles.fr" target="_blank">
          <div className="bg-gray-600 hover:bg-gray-500 dark:bg-gray-200 dark:hover:bg-gray-100 rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-bold text-gray-200 dark:text-gray-800">Emile's</h3>
            <p className="text-gray-100 dark:text-gray-700">
              C'est littérallement le projet de ma (courte) carrière !<br></br><br></br>
              Présent depuis environ 4 ans (d'abord en alternance puis en CDI), j'ai évolué en même temps que l'entreprise et le projet, ce qui m'a permis d'être là où j'en suis 👌<br></br><br></br>
              Projet multiple<br></br>
              <span className="text-left">
                ➡️ API en Laravel<br></br>
                ➡️ Site e-commerce en PrestaShop<br></br> 
              </span>
            </p>
          </div>
        </Link>
      </div>
      )}
      {activeDiv === "self" && (
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
      )}
      {activeDiv === "school" && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="https://github.com/alexis2d/cefim_android_weather_app" target="_blank">
          <div className="bg-gray-600 hover:bg-gray-500 dark:bg-gray-200 dark:hover:bg-gray-100 rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-bold text-gray-200 dark:text-gray-800">Appli Météo</h3>
            <p className="text-gray-100 dark:text-gray-700">
              Mon premier projet d'appli native !<br></br><br></br>
              Comme son nom l'indique, il s'agit d'une simple application mobile permettant de voir la météo, ni plus ni moins.<br></br><br></br>
              Réalisé avec Java sur Android Studio.
            </p>
          </div>
        </Link>
      </div>
      )}
    </section>
  );
}
