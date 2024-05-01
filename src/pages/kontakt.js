import React from "react";
import Title from "../components/title";
import Header from "../components/header";
import KontaktForm from "../components/kontaktform";
import { useState } from "react";

const Kontakt = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div>
      <Header />
      <div className="flex xl:flex-row flex-col justify-center bg-dark">
        {isFormSubmitted ? (
          <div className="w-full px-10 xl:px-0 py-48 xl:w-1/2 justify-center text-center xl:flex xl:flex-col xl:justify-center">
            <h1 className="text-5xl text-light font-bold font-roboto">
              Tusind tak for din henvendelse!
            </h1>
            <p className="text-center pt-4 text-2xl text-light font-ubuntu">
              Vi bestræber os efter at besvare din besked hurtigst muligt.
            </p>
            <div className="w-full flex justify-center">
              <button
                className="back w-4/5 xl:w-3/6 border-2 border-primary text-light text-xl py-2 px-6 rounded-full relative hover:drop-shadow-xl hover:bg-primary hover:cursor-pointer hover:text-light 
              hover:text-transform transition duration-300 font-ubuntu ease-in-out mt-10"
                onClick={() => setIsFormSubmitted(false)}
              >
                Gå tilbage
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full px-10 xl:px-0 pt-16 xl:w-1/2 xl:pl-64 xl:flex xl:flex-col lg:justify-center">
              <Title
                title={"Kom i kontakt med os"}
                bgClass={"bg-dark"}
                titleColor={"text-light"}
                alignment={"items-start lg:items-center xl:items-start"}
                textSize={"text-5xl"}
                paddingTop={"pt-0"}
              />
              <p className="text-left lg:text-center xl:text-start pt-4 text-2xl text-light font-ubuntu">
                Har du spørgsmål eller ønsker du et uforpligtende tilbud?
              </p>
              <h1 className="text-xl text-left lg:text-center xl:text-start text-stone-400 font-semibold font-ubuntu">
                Udfyld formularen og vi vender tilbage hurtigst muligt.
              </h1>
              <section className="lg:flex lg:justify-center lg:w-full">
                <div className="contact-information py-4 px-6 rounded-xl mt-4 bg-darker lg:w-1/2 xl:w-full">
                  <div className="info flex mt-2 lg:flex-col lg:items-center xl:items-center xl:flex-row">
                    <div className="info-icon">
                      <i class="fa-solid fa-location-dot text-4xl text-primary"></i>
                    </div>
                    <div className="info-text flex flex-col text-start pl-4 lg:text-center lg:pl-0 xl:pl-4 xl:text-start">
                      <h3 className="text-light font-ubuntu font-bold">
                        Adresse
                      </h3>
                      <a
                        className="text-light font-ubuntu"
                        href="https://maps.app.goo.gl/oBwBSmr5MGTZc4pJA"
                        target="_blank"
                      >
                        Kærvej 2, 6064 Jordrup
                      </a>
                    </div>
                  </div>

                  <div className="info flex mt-6 mb-2 lg:flex-col lg:items-center xl:items-center xl:flex-row">
                    <div className="info-icon">
                      <i class="fa-solid fa-phone text-3xl text-primary"></i>
                    </div>
                    <div className="info-text flex flex-col text-start pl-4 lg:text-center lg:pl-0 xl:pl-4 xl:text-start">
                      <h3 className="text-light font-ubuntu font-bold">
                        Telefon
                      </h3>
                      <a
                        className="text-light font-ubuntu"
                        href="tel:+4520125223"
                      >
                        +45 20 12 52 23
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="xl:w-1/2 w-full xl:py-12">
              <KontaktForm onFormSubmit={() => setIsFormSubmitted(true)} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Kontakt;
