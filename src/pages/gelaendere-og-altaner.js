import React from "react";
import Header from "../components/header";
import TitleBreak from "../components/titleBreak";
import Card from "../components/card";
import SlideShow from "../components/slideShow";
import SimpleImageSlider from "react-simple-image-slider";
import { gelaenderImages } from "../components/importImages";
import { Slide } from "react-slideshow-image";
import Title from "../components/title";
import Beskrivelse from "../components/description";
import { Helmet } from "react-helmet";

const GelaendereOgAltaner = () => {
  return (
    <div>
      <Helmet>
        <title>PK Smedeservice ApS | Gelændere og Altaner</title>
        <meta
          name="description"
          content="Vi tilbyder eksklusive løsninger indenfor gelændere og altaner, skræddersyet til dine behov. Læs mere eller kontakt os i dag, og få et godt tilbud."
        />
      </Helmet>
      <Header />
      <div className="bg-gray-100">
        <Title
          title={"Gelændere og Altaner"}
          bgClass={"bg-darker"}
          titleColor={"text-light"}
        />
        <div className="flex justify-center bg-darker">
          <SlideShow images={gelaenderImages} />
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
      </div>
    </div>
  );
};

export default GelaendereOgAltaner;
