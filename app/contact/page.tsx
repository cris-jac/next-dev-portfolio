import React from "react";
import Background from "../backgroud";
import TitleBanner from "@/components/TitleBanner";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";

import { bannerTitlesData } from "@/constants";

const banner = bannerTitlesData[2];

const Contact = () => {
  return (
    <div className="w-full min-h-screen relative bg-light-color dark:bg-dark-color ">
      <TitleBanner banner={banner} />

      <div className="p-4 ">
        <Background />
        <main className="flex flex-col items-center md:flex-row justify-between w-full max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row w-full justify-between z-10">
            <div className="flex flex-col w-full md:w-1/2 my-4">
              <h4 className="font-manjari text-base py-0.5 text-dark-color dark:text-light-color my-2">
                Desde Buenos Aires, para servirte...
              </h4>
              <div className="w-full my-4">
                <Map />
              </div>
            </div>

            <div className="flex flex-col w-full md:w-1/2 my-4">
              <div className="flex flex-row gap-4 justify-center">
                <div className="text-right">
                  <p className="font-manjari text-base py-0.5 text-dark-color dark:text-light-color my-2">
                    Chatea o llamame:
                  </p>
                  <p className="font-manjari text-base py-0.5 text-dark-color dark:text-light-color my-2">
                    Mandame un email:
                  </p>
                </div>

                <div className="text-left">
                  <p className="font-manjari text-base py-0.5 px-2 text-light-color bg-primary-color my-2 w-fit">
                    +54 11 7607 1045
                  </p>
                  <p className="font-manjari text-base py-0.5 px-2 text-light-color bg-primary-color my-2 w-fit">
                    cristian25co@hotmail.com
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col my-4">
                <p className="font-manjari text-base py-0.5 text-dark-color dark:text-light-color my-2">
                  ...o mejor, escribíme desde acá:
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
