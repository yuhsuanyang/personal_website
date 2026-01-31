import { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { IoArrowDown } from "react-icons/io5";
import "./style.css";
import Arrow from "../subComponents/Arrow";
import ContactSection from "../subComponents/ContactSection";
import EducationSection from "../subComponents/EducationSection";
import CertificateSection from "../subComponents/CertificateSection";
import TechnicalSkillsSection from "../subComponents/TechnicalSkillsSection";
import WorkExpSection from "../subComponents/WorkExpSection";

function Index({ basicData, expData, skillCategories }) {
  const parallax = useRef(null);
  return (
    <>
      <Parallax ref={parallax} pages={4} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={1} className="layer">
          <div className="cover">
            <ContactSection data={basicData["Contact Information"]} />
          </div>
          <div className="arrow">
            <Arrow
              name="down-arrow1"
              moveFunction={() => {
                parallax.current.scrollTo(1);
              }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} className="layer">
          <div className="arrow">
            <Arrow
              name="up-arrow1"
              moveFunction={() => {
                parallax.current.scrollTo(0);
              }}
            />
          </div>

          <div className="content">
            <EducationSection data={basicData["Education"]} />
            <TechnicalSkillsSection
              data={expData["Technical Skills"]}
              categories={skillCategories}
            />
          </div>
          <div className="arrow" style={{ top: "95%" }}>
            <Arrow
              name="down-arrow2"
              moveFunction={() => {
                parallax.current.scrollTo(2);
              }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} className="layer">
          <div className="arrow">
            <Arrow
              name="up-arrow2"
              moveFunction={() => {
                parallax.current.scrollTo(1);
              }}
            />
          </div>
          <div className="content">
            <WorkExpSection data={expData["Work Experience"].slice(0, 2)} />
          </div>
          <div className="arrow">
            <Arrow
              name="down-arrow3"
              moveFunction={() => {
                parallax.current.scrollTo(3);
              }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} className="layer">
          <div className="arrow">
            <Arrow
              name="up-arrow3"
              moveFunction={() => {
                parallax.current.scrollTo(2);
              }}
            />
          </div>
          <div className="content" style={{ flexDirection: "column" }}>
            <WorkExpSection data={expData["Work Experience"].slice(2, 3)} />
            <CertificateSection data={expData["Certificates"]} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Index;
