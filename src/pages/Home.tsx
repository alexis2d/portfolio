import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [moreInfoIsActive, setActiveMoreInfo] = useState(false);

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
      <br/><hr/><br/>
      <button className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded"
      onClick={() => setActiveMoreInfo(!moreInfoIsActive)}>👇 En savoir plus sur moi 👇</button>
      {moreInfoIsActive && (
        <p className="mt-4 text-base">
          J'ai 25 ans, développeur web depuis 4 ans, en Touraine !<br/>
          J'ai toujours su que je voulais travailler dans la tech, et quand j'ai découvert le développement web à la fac, j'ai tout de suite accroché 💪.<br/>
          Aujourd'hui, je travaille principalement avec PHP (Laravel, PrestaShop), mais j'aime aussi découvrir de nouvelles technologies (Unity, Android, React).<br/>
          Quand je ne code pas, j'aime jouer aux jeux vidéo, regarder des séries/films/animés, et récemment je me suis découvert une petite passion pour l'escalade !<br/>
          N'hésite pas à aller voir mes projets et à me contacter 👋
        </p>
      )}
    </section>
  );
}
