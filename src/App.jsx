import { useState } from "react";
import NavbarUse from "./components/NavbarUse";
import { ThemeProvider } from "@material-tailwind/react";
import { CarouselI } from "./components/CarouselI";
import Description from "./components/Description";
import GaleryP from "./components/GaleryP";
import Separator from "./components/Separator";
import WhatsappButton from "./components/WhatsappButton";
import Contact from "./components/Contact"; 
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Argatattostudio</title>
        <meta name="description" content="Tatuajes a domicilio en medellín  y antioquia " />
      </Helmet>
      <div>
        <ThemeProvider>
        <div className="bg-gray-900">
          <NavbarUse />
          </div>
          <CarouselI />
          <div id="about" className="bg-gray-900">
          <Description />
          </div>
          <div id="work">
          <Separator text={"Mi trabajo"} />
          </div>
          <GaleryP />
          <Separator text={"Contactame"} />
          <div id="contact">
          <Contact />
          </div>
          <WhatsappButton />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
