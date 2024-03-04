import Image from "next/image";
import Background from "./backgroud";
import homeImage from "@/public/home.png";
import Link from "next/link";
import ActionButton from "@/components/ActionButton";

export default function Home() {
  return (
    <div
      className="w-full p-4 min-h-screen relative bg-light-color dark:bg-dark-color"
    >
      <Background />

      <main className="flex flex-col items-center lg:flex-row justify-between w-full max-w-screen-lg mx-auto relative">
        <div className="flex flex-col content-between relative">
          <div className="flex flex-col">
            <div className="text-left relative my-12 w-fit">
              <p className="relative text-4xl font-manjari font-bold z-20">cristian apaza</p>
              <span className="absolute w-full bg-secondary-color dark:bg-primary-color h-4 bottom-2 left-2 z-10"></span>
            </div>

            <div className="relative justify-center w-fit mb-32 mt-12">
              <div className="absolute -top-10 -right-10 text-xl md:text-2xl font-josefin font-bold py-2.5 px-7 bg-primary-color text-light-color z-20">FRONT-END</div>
              <div className="relative text-center w-fit text-2xl md:text-3xl lg:text-4xl font-josefin font-bold py-5 px-14 border-primary-color border-2 dark:border-light-color bg-light-color text-primary-color z-10">WEB DEVELOPER</div>
              <div className="absolute -bottom-10 -left-10 text-xl md:text-2xl font-josefin font-bold py-2.5 px-7 bg-primary-color text-light-color z-20">BACK-END</div>
            </div>
          </div>

          <div className="relative mt-32 mb-12 flex flex-row justify-center">
              <ActionButton/>
          </div>
        </div>

        <div className="my-16">
          <Image alt="home" src={homeImage} width={520} />
        </div>
      </main>
    </div>
  );
}
