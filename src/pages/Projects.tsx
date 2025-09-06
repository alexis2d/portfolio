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
      description: "C'est littérallement le projet de ma (courte) carrière !<br/><br/>Présent depuis environ 4 ans (d'abord en alternance puis en CDI), j'ai évolué en même temps que l'entreprise et le projet, ce qui m'a permis d'être là où j'en suis 👌", 
      technos : ["Laravel", "PrestaShop", "AWS", "MySQL"],
      link: "https://www.emiles.fr"
    },
    {
      type: "self", 
      date: "2025",
      title: "Portfolio", 
      description: "Bah oui, on est dessus, mais bon...<br/><br/>En tout cas, j\'ai réalisé ce portfolio avant tout pour m\'introduire à React, mais également parce que c'est un projet que j'ai en tête depuis un certains temps.", 
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
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">Mes Projets</h2>
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
    </section>
  );
}
