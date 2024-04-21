import React from "react";
import Header from "../components/header";
import TitleBreak from "../components/titleBreak";
import Card from "../components/card";
import SlideShow from "../components/slideShow";
import SimpleImageSlider from "react-simple-image-slider";
import { interiorImages } from "../components/importImages";
import { Slide } from "react-slideshow-image";
import Title from "../components/title";
import Beskrivelse from "../components/description";

const Montering = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100">
        <Title
          title={"Montering af Stålkonstruktioner"}
          bgClass={"bg-darker"}
          titleColor={"text-light"}
        />
        <div className="flex justify-center bg-darker">
          <SlideShow images={interiorImages} />
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
        <div className="cardWrapper flex justify-around px-16 bg-gray-100 flex-col sm:px-0 md:px-0 lg:flex-row">
          <Card
            title="New Yorker Partier"
            description="Perfekt til at adskille rum uden at gå på kompromis med lys og rumfølelse. Vores New-Yorker partier er lavet af højkvalitets materialer og skræddersyes til dine behov og ønsker."
            buttonLabel="Se mere"
          />
          <Card
            title="Brusevægge"
            description="Står du og mangler en lækker brusevæg, som er skrædersyet til dit badeværelse? Så er vi det rigtige valg. Vi laver brusevægge i alle størrelser og former, og vi går ikke på kompromis med kvaliteten."
            buttonLabel="Se mere"
          />
          <Card
            title="Glaspartier"
            description="Vi laver også glaspartier, som kan bruges til at adskille rum, lave et fint vin-rum, gelænder til trappen eller noget helt andet. Vi laver glaspartier præcist til dine behov og ønsker."
            buttonLabel="Se mere"
          />
        </div>
      </div>
    </div>
  );
};

export default Montering;
