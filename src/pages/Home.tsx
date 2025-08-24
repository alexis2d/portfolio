export default function Home() {
  return (
    <section className="text-center mt-10">
      <h2 className="text-4xl font-bold text-indigo-400">Hello 👋</h2>
      <p className="mt-4 text-lg">
        Bienvenue sur mon espace à moi, <span className="font-semibold">Alexis Duquenet</span>, développeur web passionné.<br></br>
        Ma passion c'est la création, et le code est mon outil le plus précieux.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="/projects"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md"
        >
          Voir mes projets
        </a>
        <a
          href="/contact"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
