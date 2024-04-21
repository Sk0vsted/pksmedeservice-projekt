import React from "react";
import Header from "../components/header";
import TitleBreak from "../components/titleBreak";
import Description from "../components/description";
import Pauimg from "../img/pau.jpg";
import { Link } from "react-router-dom";
import Card from "../components/card";

const OmOs = () => {
  return (
    <div>
      <Header />
      <TitleBreak
        title={"Om os"}
        subtitle={"Hvem er vi?"}
        titleColor={"text-light"}
        subtitleColor={"text-gray-400"}
      />
      <div className="py-12 px-4 lg:px-80 px-20">
        <h1 className="font-roboto text-light text-3xl pb-12">
          Vi er PK Smedeservice ApS - og vi har øje for detaljen
        </h1>
        <p className="font-ubuntu text-light text-xl font-thin text-center">
          Med 18 års erfaring i smedebranchen har vi hos PK Smedeservice
          udviklet en dyb forståelse for, at effektive løsninger inden for
          jernarbejde kræver innovativ tænkning og specialiseret ekspertise.
          Vores primære mål er altid at opnå kundetilfredshed, hvilket vi opnår
          gennem vores dedikation til at skabe unikke og skræddersyede
          resultater i alt vores arbejde.
        </p>
        <p className="font-ubuntu text-light text-xl font-thin text-center pt-6">
          Siden vores etablering i 2005 har vi engageret os i en bred vifte af
          projekter, der spænder fra mindre opgaver til større
          virksomhedsinitiativer. Beliggende i Egholt, en idyllisk landsby kun
          ti minutters kørsel fra Kolding, er vores virksomhed grundlagt og
          ledet af Pau Kristiansen, en erfaren smed med over 31 års erfaring i
          branchen. Pau har altid haft en dyb passion for smedearbejde, især når
          det kommer til at udvikle innovative og unikke løsninger.
        </p>
        <p className="font-ubuntu text-light text-xl font-thin text-center pt-6">
          Vi tror fast på, at de bedste løsninger opstår gennem et tæt
          samarbejde med vores kunder. Derfor sikrer vi, at vi er i konstant
          dialog med vores kunder gennem hele processen, fra projektets
          begyndelse til dets fuldendelse, for at sikre, at deres vision bliver
          realiseret til fulde.
        </p>
        <div className="flex items-center flex-col pt-12">
          <img
            src={Pauimg}
            alt="Pau Kristiansen"
            className="rounded-xl lg:w-2/4 w-3/4"
          />
          <p className="font-ubuntu text-light text-xl font-thin text-left pt-2">
            Pau Kristiansen, indehaver af PK Smedeservice ApS
          </p>
        </div>
      </div>
      <TitleBreak
        title={"Services"}
        subtitle={"Hvad tilbyder vi?"}
        bgClass={"bg-gray-100"}
        titleColor={"text-dark"}
        subtitleColor={"text-gray-400"}
      />

      <div className="cardWrapper flex justify-around px-16 bg-gray-100 flex-col sm:px-0 md:px-0 lg:flex-row">
        <Card
          title="Interiørarbejde"
          description="Vi laver alt inden for interiørarbejde. Vi har 18 års erfaring og kan hjælpe dig med at skabe det perfekte interiør til dit hjem eller din virksomhed."
          buttonLabel="Se mere"
        />

        <Card
          title="Metal og rustfrit"
          description="Står du og mangler en smed til at lave noget indenfor metal, både rustfrit og alm. stål, så er vi klar til at hjælpe dig. Vi kan lave alt fra små til store opgaver."
          buttonLabel="Se mere"
        />

        <Card
          title="Gelændere og altaner"
          description="Ønsker du at få lavet en ny altan eller et nyt gelænder? Vi kan skabe et skrædersyet design, der er præcis, som du ønsker det, og vi kan hjælpe dig med at få det monteret."
          buttonLabel="Se mere"
        />
      </div>
    </div>
  );
};

export default OmOs;
