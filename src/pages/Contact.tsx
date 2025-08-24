import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="text-center mt-10">
      <h2 className="text-3xl font-bold text-indigo-400">Contact</h2>
      <p className="mt-4">
        Si mon profil t'intéresse, tu peux me contacter par <Link to="mailto:alexis2d.pro@gmail.com">email</Link> ou <Link to="https://linkedin.com/in/alexis-duquenet-78bbb5202" target="_blank">Linkedin</Link>, ce sera avec plaisir 😎<br></br>
        Et tu peux également checker mon <Link to="/cv.pdf">CV</Link> ainsi que mon profil <Link to="https://github.com/alexis2d" target="_blank">Github</Link>
      </p>
    </section>
  );
}
