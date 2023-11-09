import Image from "next/image";
import AnimatedText from "../components/home/animateText";
import photo from "../../public/images/profile/developer-pic-2.jpg";
import AnimatedNumbers from "./AnimatedNumers";
import Skills from "./skills/Skils";
import Experience from "./education/Education";

//
export default function About() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="w-full h-full inline-block z-0 bg-light p-16 ">
        <AnimatedText text="Dando Lo Mejor De Mí!" className={"mb-12"} />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biografia
            </h2>
            <p className="font-medium ">
              Hola, soy Andres, desarrollador web full-stack. Apasionado por la
              tecnologia, el desarrollador y la autosuperacion. Cuento con casi
              2 años de experiencia (al momento de escribir esto 👀).
            </p>
            <p className="font-medium my-4">
              Aspiro a mejorar y enontrar nuevos trabajos que satisfagan mis
              ganas de mejorar y solucionar problemas. Encuentro maravilloso la
              idea de plantear soluciones y llevarlas acabo.
            </p>
            <p className="font-medium ">
              La sensacion de ayudar a alguien es lo que mas me motiva. Trabjo
              tanto en sitios webs, aplicaciones moviles o cualquier cosa que
              este en mis capacidades. Siempre y cuando pueda imaginarlo, puedo
              buscar la forma de hacerlo ;{")"}
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            <Image
              src={photo}
              alt="foto"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={23} />
            </span>
            <h2 className="text-x1 font-medium capitalize text-dark">
              Años de edad
            </h2>
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={250} />+
            </span>
            <h2 className="text-x1 font-medium capitalize text-dark">
              Horas de Cursos y Aprendizaje
            </h2>
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={2} />+
            </span>
            <h2 className="text-x1 font-medium capitalize text-dark">
              Años de experiencia
            </h2>
          </div>
        </div>
        <div>
          <div>
            <Skills />
            <Experience />
          </div>
        </div>
      </div>
    </main>
  );
}
