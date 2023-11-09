import Image from "next/image";
import profilePic from "../public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/home/animateText";
import Link from "next/link";
import { LinkArrow } from "./components/navbar/icons";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <div className="w-full h-full inline-block z-0 bg-light p-32 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={profilePic}
              alt="CodeBucks"
              className="w-full h-auto"
            ></Image>
          </div>
          <div className="w-1/2">
            <AnimatedText
              text="Codeando hacia un futuro mejor. Simple, accesible y para todos."
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              Como desarrollador full-stack, me dedico a convertir ideas en
              aplicaciones utiles. Explora mis últimos proyectos y artículos,
              donde muestro mi experiencia en React-Next y desarrollo web.
            </p>
            <div className="flex item-center self-start mt-2">
              <Link
                href={"/dummy.pdf"}
                target="_blank"
                className="flex item center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 boder-solid border-transparent hover:border-dark transition-all duration-200 "
                download={true}
              >
                Curriculum <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                href={"/mailto:andresgomezguardamagna@gmail.com"}
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
