import React from "react";
import Header from "../components/header";

const Privatlivspolitik = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center bg-darker border-b border-dark py-12">
        <div className="w-1/2">
          <h1 className="text-center text-4xl font-bold py-12 text-light font-ubuntu">
            Privatlivspolitik for PK Smedeservice ApS
          </h1>
          <h2 className="text-left text-2xl font-bold pt-6 pb-3 text-light font-ubuntu">
            1. Introduktion
          </h2>
          <p className="text-left text-l font-thin text-light font-ubuntu">
            Denne privatlivspolitik gælder for PK Smedeservice ApS og forklarer,
            hvordan vi indsamler og bruger personlige oplysninger om vores
            kunder, leverandører og andre, der besøger vores hjemmeside eller
            interagerer med os.
          </p>
          <h2 className="text-left text-2xl font-bold pt-6 pb-3 text-light font-ubuntu">
            2. Oplysninger vi kan indsamle om nødvendigt
          </h2>
          <p className="text-left text-l font-thin text-light font-ubuntu">
            Vi kan indsamle følgende typer af personoplysninger:
          </p>
          <ul className="text-left list-disc pl-12 pt-4 text-l font-bold text-light font-ubuntu">
            <li>Kontaktoplysninger: Navn, adresse, e-mail, telefonnummer.</li>
            <li>Tekniske data: IP-adresse, browsertype, besøgstider.</li>
          </ul>
          <p className="text-left text-l font-thin text-light font-ubuntu pt-4">
            Vær opmærksom på, at PK Smedeservice ApS ikke aktivt indsamler
            personlige kontaktoplysninger uden forudgående samtykke. Personlige
            oplysninger indsamles kun, når en kunde frivilligt afgiver sådanne
            oplysninger via vores kontaktformular på hjemmesiden. Ved at
            indsende denne formular giver kunden udtrykkeligt samtykke til, at
            PK Smedeservice ApS må indsamle og anvende de nødvendige
            personoplysninger med det formål at kunne besvare henvendelsen og
            yde den ønskede service.
          </p>
          <p className="text-left text-l font-thin text-light font-ubuntu pt-4">
            Ved første besøg på PK Smedeservice ApS' hjemmeside, præsenteres
            brugeren med et valg gennem en cookie- og privatlivspolitik pop-up.
            Brugeren har mulighed for at give samtykke til eller afvise
            indsamlingen af tekniske data såsom IP-adresse, browsertype og
            besøgstider. Dette samtykke kan til enhver tid ændres eller trækkes
            tilbage af brugeren.
          </p>
          <p className="text-left text-l font-thin text-light font-ubuntu pt-4">
            Hvis brugeren vælger ikke at acceptere indsamlingen af tekniske
            data, vil visse dele af hjemmesiden muligvis ikke fungere optimalt,
            men brugeren vil stadig have adgang til de grundlæggende funktioner
            på hjemmesiden. PK Smedeservice ApS respekterer brugerens valg og
            sikrer, at ingen tekniske data indsamles for brugere, der har afvist
            sådan indsamling, medmindre det er strengt nødvendigt for den
            grundlæggende funktionalitet af hjemmesiden.
          </p>
          <p className="text-left text-l font-thin text-light font-ubuntu pt-4">
            Disse indsamlinger og brug af personoplysninger vil ske i
            overensstemmelse med gældende databeskyttelseslovgivning, herunder
            EU's Generelle Databeskyttelsesforordning (GDPR).
          </p>
          <h2 className="text-left text-2xl font-bold pt-6 pb-3 text-light font-ubuntu">
            3. Hvordan vi bruger din data
          </h2>
          <p className="text-left text-l font-thin text-light font-ubuntu">
            Dine personoplysninger kan anvendes til følgende formål:
          </p>
          <ul className="text-left list-disc pl-12 pt-4 text-l font-bold text-light font-ubuntu">
            <li>Kommunikation og kontakt</li>
            <li>Forbedring af vores hjemmeside og/eller vores tjenester.</li>
          </ul>
          <h2 className="text-left text-2xl font-bold pt-6 pb-3 text-light font-ubuntu">
            4. Deling af data
          </h2>
          <p className="text-left text-l font-thin text-light font-ubuntu">
            Vi deler ikke personlige oplysninger med tredjeparter, medmindre det
            er strengt nødvendigt for at levere vores tjenester, eller det er
            påkrævet ved lov. Alle oplysninger behandles fortroligt mellem PK
            Smedeservice ApS og vores kunder.
          </p>
          <h2 className="text-left text-2xl font-bold pt-6 pb-3 text-light font-ubuntu">
            5. Sikkerhed
          </h2>
          <p className="text-left text-l font-thin text-light font-ubuntu">
            Vi træffer passende foranstaltninger for at sikre sikkerheden af
            dine personlige oplysninger mod uautoriseret adgang, ændring eller
            ødelæggelse.
          </p>
          <h2 className="text-left text-2xl font-bold pt-6 pb-3 text-light font-ubuntu">
            6. Dine rettigheder
          </h2>
          <p className="text-left text-l font-thin text-light font-ubuntu">
            Som bruger har du ret til at anmode om adgang til, rettelse eller
            sletning af dine personlige oplysninger. Du har også ret til at
            modsætte dig behandling af dine data hos os.
          </p>
          <h2 className="text-left text-2xl font-bold pt-6 pb-3 text-light font-ubuntu">
            7. Ændringer i privatlivspolitikken
          </h2>
          <p className="text-left text-l font-thin text-light font-ubuntu">
            Denne privatlivspolitik kan ændres fra tid til anden. Den seneste
            version vil altid være tilgængelig på vores hjemmeside.
          </p>
          <h2 className="text-left text-2xl font-bold pt-6 pb-3 text-light font-ubuntu">
            8. Kontakinformation
          </h2>
          <p className="text-left text-l font-thin text-light font-ubuntu">
            For spørgsmål vedrørende denne politik, kontakt os på:
          </p>
          <ul className="text-left italic pt-4 text-l text-light font-ubuntu">
            <li className="py-1">PK Smedeservice ApS</li>
            <li className="py-1">Kærvej 2, 6064 Jordrup</li>
            <li className="py-1">Telefon: 20 12 52 23</li>
            <li className="py-1">E-mail: pau@pksmedeservice.dk</li>
            <li className="py-1"> CVR nr.: 34617287</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privatlivspolitik;
