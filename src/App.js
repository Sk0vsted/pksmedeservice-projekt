import './App.css';
import Header from './components/header';
import Button from './components/button';
import Card from './components/card';
import Hero from './components/hero';
import Gallery from './components/gallery';
import React, { useEffect, useRef, useState } from 'react';
import TitleBreak from './components/titleBreak';
import About from './components/about';
import Footer from './components/footer';
import Copyright from './components/copyright';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Interiørarbejde from './pages/interiorarbejde';
import Error404 from './pages/404';
import Kontakt from './pages/kontakt';
import MetalOgRustfrit from './pages/metal-og-rustfrit';
import Privatlivspolitik from './pages/privatlivspolitik';
import Galleri from './pages/galleri';
import OmOs from './pages/om-os';
import GelænderOgAltaner from './pages/gelaendere-og-altaner';
import MonteringAfStaalkonstruktioner from './pages/montering-af-staalkonstruktioner';
import Services from './pages/services';
import process from 'process';
import interior1 from './img/interior/interior7.jpg';
import gelaender1 from './img/gelaender.JPG';
import metal1 from './img/metal.JPG';
import { Helmet } from 'react-helmet';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
window.process = process;

require('dotenv').config();

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="main-content">{children}</div>
      <Footer />
      <Copyright />
    </div>
  );
};

const Home = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const headerHeight = header.offsetHeight;
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerHeight}px`
      );
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          PK Smedeservice ApS | Smedeservice, som altid sætter kunden i første
          række!
        </title>
        <meta
          name="description"
          content="PK Smedeservice ApS er en smedevirksomhed med 18 års erfaring inden for metalarbejde, interiørarbejde og industri-smederi. Vi er beliggende i Egholt, en idyllisk landsby kun ti minutters kørsel fra Kolding."
        />
      </Helmet>
      <Header ref={headerRef} />
      <Hero
        title={'Velkommen til PK Smedeservice ApS'}
        description={
          'Vi har 18 års erfaring inden for metalarbejde, interiørarbejde og industri-smederi.'
        }
      />

      <TitleBreak
        title={'Services'}
        subtitle={'Hvad tilbyder vi?'}
        bgClass={'bg-gray-100'}
        titleColor={'text-dark'}
        subtitleColor={'text-gray-400'}
      />

      <div className="cardWrapper flex justify-around md:px-16 bg-gray-100 flex-col sm:px-0 lg:flex-col xl:flex-row">
        <Card
          title="Interiørarbejde"
          src={interior1}
          description="Vi laver alt inden for interiørarbejde. Vi har 18 års erfaring og kan hjælpe dig med at skabe det perfekte interiør til dit hjem eller din virksomhed."
          buttonLabel="Se mere"
          to="/interiorarbejde"
        />

        <Card
          title="Metal og rustfrit"
          src={metal1}
          description="Står du og mangler en smed til at lave noget indenfor metal, både rustfrit og alm. stål, så er vi klar til at hjælpe dig. Vi kan lave alt fra små til store opgaver."
          buttonLabel="Se mere"
          to="/metal-og-rustfrit"
        />

        <Card
          title="Gelændere og altaner"
          src={gelaender1}
          description="Ønsker du at få lavet en ny altan eller et nyt gelænder? Vi kan skabe et skrædersyet design, der er præcis, som du ønsker det, og vi kan hjælpe dig med at få det monteret."
          buttonLabel="Se mere"
          to="/gelaendere-og-altaner"
        />
      </div>

      <TitleBreak
        title={'Galleri'}
        subtitle={'Se vores arbejde'}
        bgClass={'bg-darker'}
        titleColor={'text-light'}
        subtitleColor={'text-gray-400'}
      />

      <Gallery />
      <div className="py-8"></div>

      <About />
    </div>
  );
};

const App = () => {
  const [gaConsent, setGaConsent] = useState(false);

  const loadGA4 = () => {
    console.log('Loading GA4 script...');
    const scriptUrl = document.createElement('script');
    scriptUrl.src = 'https://www.googletagmanager.com/gtag/js?id=G-6X2HJHK7S1';
    scriptUrl.async = true;
    document.head.appendChild(scriptUrl);

    scriptUrl.onload = () => {
      console.log('GA4 script loaded successfully');
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'G-6X2HJHK7S1', { anonymize_ip: true });
    };
  };

  useEffect(() => {
    const handleConsentClick = (event) => {
      const role = event.target.closest('[data-role]');
      if (!role) return;

      if (role.getAttribute('data-role') === 'all') {
        console.log('All cookies accepted');
        setGaConsent(true);
      } else if (role.getAttribute('data-role') === 'necessary') {
        console.log('Only necessary cookies accepted');
        setGaConsent(false);
      }
    };

    document.addEventListener('click', handleConsentClick);

    // Cleanup to remove event listener
    return () => {
      document.removeEventListener('click', handleConsentClick);
    };
  }, []);

  useEffect(() => {
    if (gaConsent) {
      loadGA4();
    }
  }, [gaConsent]);

  useEffect(() => {
    CookieConsent.run({
      autoShow: true,
      autoclear_cookies: true,
      theme_css:
        'https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/dist/themes/dark.min.css',
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          onAccept: () => {
            console.log('Analytics consent granted.');
            setGaConsent(true);
          },
          onReject: () => {
            console.log('Analytics consent rejected.');
            setGaConsent(false);
          },
          cookies: [
            {
              name: '_ga',
              domain: 'example.com',
              expiryDays: 365,
              purpose:
                'Bruges til at skelne mellem brugere og sessioner. Cookien opdateres hver gang data sendes til Google Analytics.',
            },
            {
              name: '_gid',
              domain: 'example.com',
              expiryDays: 24 * 60 * 60,
              purpose: 'Bruges til at skelne mellem brugere.',
            },
          ],
        },
      },
      language: {
        default: 'da',
        translations: {
          da: {
            consentModal: {
              title: 'Vi bruger cookies!',
              description:
                'Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside. Ved at klikke på "Accepter alle" accepterer du brugen af alle cookies. Du kan også vælge at afvise alle cookies, eller vælge hvilke cookies du vil acceptere ved at klikke på "Cookieindstillinger".',
              acceptAllBtn: 'Accepter alle',
              acceptNecessaryBtn: 'Afvis alle',
              showPreferencesBtn: 'Cookieindstillinger',
            },
            preferencesModal: {
              title: 'Cookieindstillinger',
              title: 'Cookieindstillinger',
              acceptAllBtn: 'Accepter alle',
              acceptNecessaryBtn: 'Afvis alle',
              savePreferencesBtn: 'Gem indstillinger',
              closeIconLabel: 'Luk vindue',
              sections: [
                {
                  title: 'Strengt nødvendige cookies',
                  description:
                    'Disse cookies er essentielle for, at websitet kan fungere korrekt og kan ikke deaktiveres. Lige nu er der ikke nogle essentielle cookies, og hvis de tilføjes, vil det stå på vores privatlivspolitik siden. De gemmer ingen personlige oplysninger.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Performance og Analyse',
                  description:
                    'Denne cookie, som består af Google Analytics 4, indsamler information om, hvordan du bruger vores website. Alle data er anonymiseret og kan ikke bruges til at identificere dig.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    caption: 'Liste af cookies',
                    headers: {
                      name: 'Navn',
                      description: 'Beskrivelse',
                      duration: 'Varighed',
                    },
                    body: [
                      {
                        name: '_ga',
                        description:
                          'Google Analytics cookie bruges til at skelne mellem brugere og sessioner.',
                        duration: '1 år',
                      },
                      {
                        name: '_gid',
                        description:
                          'Google Analytics cookie bruges til at skelne mellem brugere.',
                        duration: '24 timer',
                      },
                    ],
                  },
                },
                {
                  title: 'Mere information',
                  description:
                    'For spørgsmål vedrørende vores cookiepolitik og dine valgmuligheder, venligst kontakt os, eller tjek vores privatlivspolitik.',
                },
              ],
            },
          },
        },
      },
      onAccept: () => {
        console.log('Cookies accepted, setting GA consent to true.');
        localStorage.setItem('gaConsent', 'true');
        setGaConsent(true);
        loadGA4();
      },
      onReject: () => {
        console.log('Cookies rejected, setting GA consent to false.');
        localStorage.setItem('gaConsent', 'false');
        setGaConsent(false);
      },
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/interiorarbejde"
          element={
            <Layout>
              <Interiørarbejde />
            </Layout>
          }
        />
        <Route
          path="/kontakt"
          element={
            <Layout>
              <Kontakt />
            </Layout>
          }
        />
        <Route
          path="/metal-og-rustfrit"
          element={
            <Layout>
              <MetalOgRustfrit />
            </Layout>
          }
        />
        <Route path="*" element={<Error404 />} />
        <Route
          path="/privatlivspolitik"
          element={
            <Layout>
              <Privatlivspolitik />
            </Layout>
          }
        />
        <Route
          path="/galleri"
          element={
            <Layout>
              <Galleri />
            </Layout>
          }
        />
        <Route
          path="/om-os"
          element={
            <Layout>
              <OmOs />
            </Layout>
          }
        />
        <Route
          path="/gelaendere-og-altaner"
          element={
            <Layout>
              <GelænderOgAltaner />
            </Layout>
          }
        />
        <Route
          path="/montering-af-staalkonstruktioner"
          element={
            <Layout>
              <MonteringAfStaalkonstruktioner />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
