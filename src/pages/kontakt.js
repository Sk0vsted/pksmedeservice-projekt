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
      <div className="flex lg:flex-row flex-col justify-center bg-dark">
        {isFormSubmitted ? (
          <div className="w-full px-10 lg:px-0 py-48 lg:w-1/2 justify-center text-center lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-5xl text-light font-bold font-roboto">
              Tusind tak for din henvendelse!
            </h1>
            <p className="text-center pt-4 text-2xl text-light font-ubuntu">
              Vi bestræber os efter at besvare din besked hurtigst muligt.
            </p>
            <div className="w-full flex justify-center">
              <button
                className="back w-4/5 lg:w-3/6 border-2 border-primary text-light text-lg py-2 px-6 rounded-full relative hover:drop-shadow-xl hover:bg-primary hover:cursor-pointer hover:text-light 
              hover:text-transform transition duration-300 font-ubuntu ease-in-out mt-10"
                onClick={() => setIsFormSubmitted(false)}
              >
                Gå tilbage
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full px-10 lg:px-0 pt-16 lg:w-1/2 lg:pl-64 lg:flex lg:flex-col lg:justify-center">
              <Title
                title={"Kom i kontakt med os"}
                bgClass={"bg-dark"}
                titleColor={"text-light"}
                alignment={"items-start"}
                textSize={"text-5xl"}
                paddingTop={"pt-0"}
              />
              <p className="text-left pt-4 text-2xl text-light font-ubuntu">
                Har du spørgsmål eller ønsker du et uforpligtende tilbud?
              </p>
              <h1 className="text-lg text-left text-stone-400 font-semibold font-ubuntu">
                Udfyld formularen og vi vender tilbage hurtigst muligt.
              </h1>
            </div>
            <div className="lg:w-1/2 w-full lg:py-12">
              <KontaktForm onFormSubmit={() => setIsFormSubmitted(true)} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Kontakt;
