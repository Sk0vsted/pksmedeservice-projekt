import React from "react";
import Header from "../components/header";
import TitleBreak from "../components/titleBreak";
import Card from "../components/card";
import SlideShow from "../components/slideShow";
import SimpleImageSlider from "react-simple-image-slider";
import { monteringImages } from "../components/importImages";
import { Slide } from "react-slideshow-image";
import Title from "../components/title";
import Beskrivelse from "../components/description";
import { Helmet } from "react-helmet";

const Montering = () => {
  return (
    <div>
      <Helmet>
        <title>PK Smedeservice ApS | Montering af Stålkonstruktioner</title>
        <meta
          name="description"
          content="Står du og mangler hjælp til montering af stålkonstruktioner? Vi står klar til at være der for dig. Læs mere om vores løsninger her."
        />
      </Helmet>
      <Header />
      <div className="bg-gray-100">
        <Title
          title={"Montering af Stålkonstruktioner"}
          bgClass={"bg-darker"}
          titleColor={"text-light"}
        />
        <div className="flex justify-center bg-darker">
          <SlideShow images={monteringImages} />
        </div>
        <TitleBreak
          title={"Montering af Stålkonstruktioner"}
          subtitle={"Hvad tilbyder vi?"}
          bgClass={"bg-gray-100"}
          titleColor={"text-dark"}
          subtitleColor={"text-gray-400"}
        />
        <Beskrivelse
          title={"Monteringer med Robusthed og Præcision til dit Projekt"}
          description={
            "Vi eksperter i montering af stålkonstruktioner, der kombinerer funktionalitet med æstetik. For os handler det ikke blot om at levere strukturer, men også at skabe langvarige værdier for dine projekter. Kvalitet og holdbarhed har altid været hjørnestenene i vores arbejde."
          }
          description2={
            "Vi bruger kun de bedste materialer og følger byggestandarder for at sikre, at vores stålkonstruktioner står imod tidens tand. Vores mål er at overgå kundernes forventninger med strukturer, der ikke blot er stærke og holdbare, men også æstetisk tiltalende."
          }
          description3={
            "Vi ved, at vi er forpligtet til at levere ekstraordinære løsninger i montering af stålkonstruktioner, der er en markant repræsentation af vores håndværk og dedikation. Uanset om det er til private hjem, kontorbygninger eller andre komplekser, har vi kompetencerne til at løfte dit projekt til nye højder."
          }
        />
      </div>
    </div>
  );
};

export default Montering;
