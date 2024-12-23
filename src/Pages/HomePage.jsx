import { Header } from "../components/Header/Header";
import { Slider } from "../components/Slider/Slider";
import { Intro } from "../components/Intro/Intro";
import { Service } from "../components/Service/Service";
import { Values } from "../components/Values/Values";
import { Achievements } from "../components/Achievements/Achievements";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Footer } from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Intro />
      <Service />
      <ContactForm />
      <Values />
      <Achievements />
      <Footer />
    </>
  );
};

export default HomePage;
