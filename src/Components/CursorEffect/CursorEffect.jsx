

import Footer from './../Footer/Footer'
import Header from './../Header/Header'
import HeroSection from './../HeroSection/HeroSection'
import ProjectSection from './../ProjectSection/ProjecSection'
import AboutSection from './../AboutSection/AboutSection'
import SkillSection from './../SkillSection/SkillSection'
import ScrollToTopButton from './../ScrollToTopButton/ScrollToTopButton'
// import { useEffect, useState } from 'react';
// import { gsap } from 'gsap';
import './CursorEffect';
import FooterForm from '../FooterForm/FooterForm'


function CursorEffect() {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      {/* <FooterForm /> */}
      <Footer />
    </>
  );
}

export default CursorEffect;
