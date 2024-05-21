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
import CardItem from "../components/cardItem";
import InteriorCard1 from "../img/interior/interiorCards/interiorCard1.jpg";
import InteriorCard2 from "../img/interior/interiorCards/interiorCard2.jpg";
import InteriorCard3 from "../img/interior/interiorCards/interiorCard3.jpg";
import InteriorCard4 from "../img/interior/interiorCards/interiorCard4.jpg";
import InteriorCard5 from "../img/interior/interiorCards/interiorCard5.jpg";
import InteriorCard6 from "../img/interior/interiorCards/interiorCard6.jpg";
import InteriorCard7 from "../img/interior/interiorCards/interiorCard7.jpg";
import InteriorCard8 from "../img/interior/interiorCards/interiorCard8.jpg";
import { Helmet } from "react-helmet";

const Interiørarbejde = () => {
  return (
    <div>
      <Helmet>
        <title>PK Smedeservice ApS | Interiørarbejde</title>
        <meta
          name="description"
          content="Udforsk vores brede udvalg af interiør smedearbejde, hvor vi tilbyder alt fra skræddersyede løsninger til unikke New Yorker partier. Lær mere om, hvordan vores ekspertise og specialiseringer kan forvandle dit rum med elegance og funktionalitet"
        />
      </Helmet>
      <Header />
      <div className="bg-gray-100">
        <Title
          title={"Interiørarbejde"}
          bgClass={"bg-darker"}
          titleColor={"text-light"}
        />
        <div className="flex justify-center bg-darker">
          <SlideShow images={interiorImages} />
        </div>
        <TitleBreak
          title={"Interiørarbejde"}
          subtitle={"Hvad tilbyder vi?"}
          bgClass={"bg-gray-100"}
          titleColor={"text-dark"}
          subtitleColor={"text-gray-400"}
        />
        <Beskrivelse
          title={
            "Skræddersyet Interiør-Smedearbejde, Skabt til Dine Unikke Behov"
          }
          description={
            "Når det handler om at forvandle dit hjem eller arbejdssted til et æstetisk og funktionelt mesterværk, er valget af den rette partner afgørende. Hos PK Smedeservice har vi 18 års erfaring i at levere ekstraordinært interiørarbejde, der matcher dine unikke behov og stil."
          }
          description2={
            "Vi er specialiserede i at levere skræddersyet interiørarbejde til både private og erhverv. Vi har leveret interiørarbejde til mange forskellige formål, herunder butikker, restauranter, kontorer, boliger og meget mere. Vi har erfaring med at arbejde med mange forskellige materialer, herunder stål, glas og aluminium."
          }
          description3={
            "Vi går aldrig på kompromis med kvalitet. Vores materialer og arbejdsmetoder er af højeste standard for at sikre, at dit interiørarbejde er smukt og holdbart i mange år frem. Vi er stolte af at have leveret interiørarbejde til mange tilfredse kunder i hele Danmark, og ønsker fortsat at levere det bedste interiørarbejde til vores kunder."
          }
        />
      </div>
      <div className="flex justify-center pb-12 bg-gray-300">
        <TitleBreak
          title={"Kunne du tænke dig at se mere af vores interiørarbejde?"}
          bgClass={"bg-gray-300"}
          titleColor={"text-darker"}
        />
      </div>
      <div className="flex lg:justify-center lg:flex-row flex-col pb-12 bg-gray-300">
        <CardItem
          title={"Fin ny New Yorker dør til hus"}
          description={
            "Vi har lavet en fin ny New Yorker dør til et nyt hus. Døren er en perfekt rumdeler, som giver et flot og moderne look til huset."
          }
          image={InteriorCard1}
          hashtag1={"#interiør"}
          hashtag2={"#new-yorker"}
          hashtag3={"#nyt-hus"}
          bgColor={"bg-light"}
          alt={"newyorker dør i sort"}
        />
        <CardItem
          title={"Bruse væg med dør"}
          description={
            "Her har vi lavet en brusevæg med dør. Døren er lavet med nano behandling, og er perfekt til et moderne badeværelse."
          }
          image={InteriorCard2}
          hashtag1={"#bruse-væg"}
          hashtag2={"#nano-behandling"}
          hashtag3={"#badeværelse"}
          bgColor={"bg-light"}
          alt={"brusevæg med dør ind til brusekabine"}
        />
        <CardItem
          title={"Glaspartier til vin rum"}
          description={
            "Vi har lavet nogle flotte glaspartier til et vin rum. Glaspartierne er indrammet i metal og giver et flot og unikt look til rummet."
          }
          image={InteriorCard3}
          hashtag1={"#vin-rum"}
          hashtag2={"#glaspartier"}
          hashtag3={"#inspiration"}
          bgColor={"bg-light"}
          alt={"glasparti til vinrum, beliggende ved siden af et køkken"}
        />
        <CardItem
          title={"Skydedør med glas til køkken alrum"}
          description={
            "Her er der lavet en skydedør med glas, som er perfekt til et køkken alrum. Skydedøren er lavet i new yorker stil, og giver et flot look."
          }
          image={InteriorCard4}
          hashtag1={"#køkken-alrum"}
          hashtag2={"#new-yorker"}
          hashtag3={"#indretning"}
          bgColor={"bg-light"}
          alt={"skydedør med glas til køkken alrum"}
        />
      </div>

      <div className="flex lg:justify-center lg:flex-row flex-col pb-12 bg-gray-300">
        <CardItem
          title={"Udnyt pladsen under trappen"}
          description={
            "En fantastisk måde at udnytte pladsen under trappen på ved at have en new yorker parti. Samtidig er der en udtrækshylde ved siden af."
          }
          image={InteriorCard5}
          hashtag1={"#interiør"}
          hashtag2={"#indretning"}
          hashtag3={"#muligheder"}
          bgColor={"bg-light"}
          alt={
            "new yorker parti under trappe med vaskemaskine bagved tonet glas"
          }
        />
        <CardItem
          title={"Special designet spejl"}
          description={
            "Her har vi lavet et special designet spejl til en forgang. Spejlet er lavet i en flot stålramme, som giver et anderledes og unikt look."
          }
          image={InteriorCard6}
          hashtag1={"#spejl"}
          hashtag2={"#unikt"}
          hashtag3={"#inspiration"}
          bgColor={"bg-light"}
          alt={"special designet spejl i metalramme"}
        />
        <CardItem
          title={"Helt almindelig dør, udskiftet med en New Yorker dør"}
          description={
            "Her har vi udskiftet en helt almindelig dør med en ny New Yorker dør. Døren er mere moderne og giver et pænt udtryk til huset."
          }
          image={InteriorCard7}
          hashtag1={"#udskiftning"}
          hashtag2={"#new-yorker"}
          hashtag3={"#nybyggeri"}
          bgColor={"bg-light"}
          alt={"new yorker dør i sort med 4 store glasruder"}
        />
        <CardItem
          title={"Speciel New Yorker dør"}
          description={
            "Vi har lavet en lidt anderledes og speciel new yorker skydedør, som skulle køre mellem soveværelet og toilettet."
          }
          image={InteriorCard8}
          hashtag1={"#indretning"}
          hashtag2={"#specielt-design"}
          hashtag3={"#inspiration"}
          bgColor={"bg-light"}
          alt={
            "new yorker skydedør med glas til soveværelse, diagonalt design i toppen af døren"
          }
        />
      </div>
    </div>
  );
};

export default Interiørarbejde;
