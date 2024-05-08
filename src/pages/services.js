import React from "react";
import Header from "../components/header";
import Service from "../components/service";
import serviceInterior from "../img/serviceInterior.jpg";
import serviceMetal from "../img/serviceMetal.jpg";
import serviceGelaender from "../img/serviceGelaender.jpg";
import serviceMontering from "../img/serviceMontering.jpg";
import TitleBreak from "../components/titleBreak";

const Services = () => {
  return (
    <div>
      <Header />
      <TitleBreak
        title={"Vores Services"}
        subtitle={"Hvad tilbyder vi?"}
        bgClass={"bg-darker"}
        titleColor={"text-light"}
        subtitleColor={"text-gray-400"}
      />
      <div className="services pt-12">
        <Service
          title="Interiørarbejde"
          description="Skræddersyet interiør-smedearbejde, skabt til dine unikke behov"
          backgroundStyle={{
            backgroundImage: `url(${serviceInterior})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          contentAlignment={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          buttonLabel="Mere om interiørarbejde"
          NavLinkLocation={"/interiorarbejde"}
        />
        <Service
          title="Metal og rustfrit"
          description="Høj-kvalitets metal og rustfrit Arbejde, lige efter dine ønsker"
          backgroundStyle={{
            backgroundImage: `url(${serviceMetal})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          contentAlignment={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          buttonLabel="Mere om metal og rustfrit"
          NavLinkLocation={"/metal-og-rustfrit"}
        />
        <Service
          title="Gelændere og altaner"
          description="Eksklusive gelændere og altaner - håndværk i særklasse"
          backgroundStyle={{
            backgroundImage: `url(${serviceGelaender})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          contentAlignment={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          buttonLabel="Mere om gelændere og altaner"
          NavLinkLocation={"/gelaendere-og-altaner"}
        />
        <Service
          title="Montering af stålkonstruktioner"
          description="Monteringer med robusthed og præcision til dit projekt"
          backgroundStyle={{
            backgroundImage: `url(${serviceMontering})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          contentAlignment={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          buttonLabel="Mere om stålkonstruktioner"
          NavLinkLocation={"/montering-af-staalkonstruktioner"}
        />
      </div>
    </div>
  );
};

export default Services;
