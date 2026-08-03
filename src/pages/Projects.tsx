import { Link } from "react-router-dom";
import { useState } from "react";

export default function Projects() {
  const [activeDiv, setActiveDiv] = useState("work");

  const projetcTypes = [
    { label: "Projets professionnels", value: "work" },
    { label: "Projets personnels", value: "self" },
    { label: "Projets scolaires", value: "school" }
  ];

  const projects = [
    {
      type: "work", 
      date: "2021 - Aujourd'hui",
      title: "Emile's", 
      description: "Il s'agit de la référence des plateformes avantages pour CSE : c'est le projet de ma carrière !<br/><br/>Pendant ces 5 dernières années, j'ai évolué en même temps que l'entreprise et le projet, ce qui m'a permis d'être là où j'en suis 👌<br/><br/><hr/><br/>Avec une API en Laravel ainsi qu'un site e-commerce en PrestaShop, j'ai pu consolider mes connaissances au fil des projets (tels que, pour n'en cité que quelques un, un module personnalisé de Cross-Selling, le branchement à des API partenaires, l'ajout de moyens de paiement, etc).<br/><br/>Toutes ces expériences accompagnées de collègues compétents mon permis de devenir un réel développeur web confirmé 💪<br/><br/><hr/><br/>Cette année marque un tournant pour Emile's : une refonte totale. Qui dit refonte, dit nouvelles technologies ! React et Symfony/Sylius sont au rendez-vous, sur lesquels j'ai été formés et avec lesquels je travaille quotidiennement.", 
      technos : ["Laravel", "PrestaShop", "Sylius", "React", "AWS", "SQL"],
      link: "https://www.emiles.fr"
    },
    {
      type: "self", 
      date: "2025",
      title: "Portfolio", 
      description: "Bah oui, on est dessus, mais bon...<br/><br/>En tout cas, j\'ai réalisé ce portfolio avant tout pour m\'introduire à React.", 
      technos : ["React", "TailwindCSS"],
      link: "https://github.com/alexis2d/portfolio"
    },
    {
      type: "self", 
      date: "2025",
      title: "KHWatchFace", 
      description: "Quand on s'achète un nouveau jouet, nous les développeurs on veut absolument avoir NOTRE version...<br/><br/>Du coup, j'ai créé ma propre watchface à l'image de ma licence de jeu vidéo préférée dès que j'ai acheté ma smartwatch.", 
      technos : ["Android", "WatchFaceFormat", "XML"],
      link: "https://github.com/alexis2d/KHWatchFace"
    },
    {
      type: "self", 
      date: "2025",
      title: "OIIA Cat Game", 
      description: "Le jeu vidéo, c'est ma passion première, alors évidemment, après des années d'expérience dans le développement, je me suis enfin lancé dans le GameDev !<br/><br/>La vidéo jointe est une petite preview de mon premier projet sous Unity, un plateformer 3D basé sur un meme assez récent.<br/><br/>C'est un projet crash test, il m'a permis d'apprendre à utiliser Unity (merci les dizaines de tutos YouTube que j'ai bouffés 👌) ainsi que d'appréhender le C#. J'ai maintenant plein d'idées pour la suite !", 
      technos : ["Unity", "C#"],
      link: "https://youtu.be/Nr0Uu5MX3JE"
    },
    {
      type: "self", 
      date: "2025",
      title: "Project Azluna", 
      description: "A la base un projet pour un Game Jam (Live2D Game Jam), j'ai décidé de continuer à développer ce petit visual novel après l'évènement.<br/><br/>C'était mon premier Game Jam et également mon premier projet de jeu vidéo en étant accompagné, ce qui est bien plus motivant !", 
      technos : ["Unity", "C#"],
      link: "https://github.com/alexis2d/ProjectAzluna"
    },
    {
      type: "self", 
      date: "2026",
      title: "Project Portalz", 
      description: "Fan du dessin animé et jeu vidéo Wakfu et fan de platformers, j'ai décidé de tenter un mix en créant un platformer 2D dont la mécanique principale est : les portails.", 
      technos : ["Unity", "C#"],
      link: "https://github.com/alexis2d/ProjectPortalz"
    },
    {
      type: "school", 
      date: "2023",
      title: "Appli Météo", 
      description: "Mon premier projet d'appli native !<br/><br/>Comme son nom l'indique, il s'agit d'une simple application mobile permettant de voir la météo, ni plus ni moins.", 
      technos : ["Android", "Java"],
      link: "https://github.com/alexis2d/cefim_android_weather_app"
    }
  ];

  const filteredProjects = projects.filter(
    (project) => project.type === activeDiv
  );

  return (
    <section className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">Mes Projets*</h2>
      <div className="flex flex-col md:flex-row gap-2 mb-4 justify-center">
        {projetcTypes.map((type) => (
          <button 
          key={type.value}
          onClick={() => setActiveDiv(type.value)} 
          className={`px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded ${activeDiv === type.value ? 'selected' : ''}`}
        >
          {type.label}
        </button>
        ))}
      </div>
      <div className={filteredProjects.length > 1 ? "grid sm:grid-cols-2 md:grid-cols-3 gap-6" : ""}>
        {filteredProjects.map((project) => (
          <Link key={project.title} to={project.link} target="_blank">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 shadow-md relative link">
              <p className="bg-indigo-400 dark:bg-indigo-100 text-gray-100 dark:text-indigo-800 text-sm top-0 right-0 p-3 rounded-bl-lg rounded-tr-lg absolute">{project.date}</p>
              <h3 className="text-xl text-left md:text-center font-bold">{project.title}</h3>
              <br/><hr/><br/>
              <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
              <br/><hr/><br/>
              {project.technos.map((techno, index) => (
                <span key={project.title + " - techno " + index} className="inline-block bg-indigo-400 dark:bg-indigo-100 text-gray-100 dark:text-indigo-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">{techno}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <p className="text-sm text-gray-400 ml-2 text-left">*Liste non exhaustive</p>
    </section>
  );
}
