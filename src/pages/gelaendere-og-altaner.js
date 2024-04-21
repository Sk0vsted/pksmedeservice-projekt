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

const GelaendereOgAltaner = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100">
        <Title
          title={"Gelændere og Altaner"}
          bgClass={"bg-darker"}
          titleColor={"text-light"}
        />
        <div className="flex justify-center bg-darker">
          <SlideShow images={interiorImages} />
        </div>
        <TitleBreak
          title={"Gelændere og Altaner"}
          subtitle={"Hvad tilbyder vi?"}
          bgClass={"bg-gray-100"}
          titleColor={"text-dark"}
          subtitleColor={"text-gray-400"}
        />
        <Beskrivelse
          title={"Eksklusive Gelændere og Altaner - Håndværk i Særklasse"}
          description={
            "Opdag skønheden og sikkerheden i vores skræddersyede gelændere og altaner, udarbejdet specifikt til dit behov. Med mere end 18 års erfaring er vi eksperter i at skabe elegante, robuste løsninger, der ikke blot forbedrer dit hjem eller arbejdsplads æstetisk, men også sikrer optimal sikkerhed og holdbarhed."
          }
          description2={
            "Hos PK Smedeservice er vi altid i tæt dialog med vores kunder omrkinger detaljer og personlig stil, for at matche netop din arkitektoniske vision. Vores gelændere og altaner er fremstillet af højkvalitetsmaterialer som rustfrit stål og smedejern, som garanterer både elegance og lang levetid."
          }
          description3={
            "Uanset om det er til private hjem, kontorbygninger eller kommercielle komplekser, har vi kompetencerne til at levere unikke og funktionelle løsninger, der afspejler din unikke stil. Vores engagement i højeste håndværksmæssige standarder sikrer, at hver eneste altan og gelænder fra os, står som et symbol på kvalitet og elegance."
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

export default GelaendereOgAltaner;
