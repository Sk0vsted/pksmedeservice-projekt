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

const MetalOgRustfrit = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100">
        <Title
          title={"Metal og Rustfrit"}
          bgClass={"bg-darker"}
          titleColor={"text-light"}
        />
        <div className="flex justify-center bg-darker">
          <SlideShow images={interiorImages} />
        </div>
        <TitleBreak
          title={"Metal og Rustfrit"}
          subtitle={"Hvad tilbyder vi?"}
          bgClass={"bg-gray-100"}
          titleColor={"text-dark"}
          subtitleColor={"text-gray-400"}
        />
        <Beskrivelse
          title={
            "Høj-kvalitets Metal og Rustfrit Arbejde, Lige Efter Dine Ønsker"
          }
          description={
            "Når det kommer til at realisere dine visioner for metal- og rustfrit arbejde, er det afgørende at vælge den rette ekspertise. Vi vil altid prioritere at løse alle opgaver med en dyb forståelse for, at skabelsen af både praktiske og kunstneriske metalværker, kræver en kombination af innovativ tænkning og specialiseret ekspertise."
          }
          description2={
            "Vores specialisering ligger i at skabe skræddersyede metal- og rustfrie løsninger for både private og erhvervskunder. Vi har en bred portefølje, der spænder fra simple opgaver til større installationer i forskellige omgivelser som boliger, restauranter og erhvervsbygninger. Vi mestrer samtidig et bredt spektrum af materialer, herunder forskellige metaller og rustfrit stål, som vi omdanner til både æstetiske og funktionelle løsninger, specifikt til hvad vores kunder ønsker."
          }
          description3={
            "Kvalitet er kernen i alt, hvad vi gør. Vores materialer og teknikker er nøje udvalgt for at sikre langvarig skønhed og holdbarhed i vores arbejde. Vi er stolte over at have bidraget med vores ekspertise til en lang række tilfredse kunder over hele Danmark og stræber altid efter at leve op til forventningerne med vores metal- og rustfrit arbejde."
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

export default MetalOgRustfrit;
