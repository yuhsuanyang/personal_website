import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { IoArrowDown } from "react-icons/io5";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./style.css";
import Arrow from "../subComponents/Arrow";
import ContactSection from "../subComponents/ContactSection";
import EducationSection from "../subComponents/EducationSection";
import CertificateSection from "../subComponents/CertificateSection";
import TechnicalSkillsSection from "../subComponents/TechnicalSkillsSection";
import WorkExpSection from "../subComponents/WorkExpSection";

function Index({ basicData, expData, skillCategories }) {
  const parallax = useRef(null);
  const waitForCV = (iframe) =>
    new Promise((resolve) => {
      const check = () => {
        const doc = iframe.contentDocument;
        if (doc && doc.getElementsByClassName("cv")) {
          resolve();
        } else {
          requestAnimationFrame(check);
        }
      };
      check();
    });
  const downloadCV = async () => {
    const iframe = document.getElementById("cv");
    await waitForCV(iframe);

    const content = iframe.contentDocument;
    // content.body.style.fontSize = "20px";
    console.log(content.body.style.fontSize);
    const canvas = await html2canvas(content.body, {
      useCORS: true,
    });
    // console.log(body.style.fontSize);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("CV.pdf");
  };

  return (
    <>
      <Parallax
        ref={parallax}
        pages={4}
        style={{ top: "0", left: "0", backgroundColor: "#242424" }}
      >
        <ParallaxLayer offset={0} speed={1} className="layer">
          <div className="cover">
            <ContactSection
              data={basicData["Contact Information"]}
              onClickFunction={downloadCV}
            />
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
              data={Object.values(expData["Technical Skills"]).flat()}
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
      <iframe src="/#/CV" id="cv" style={{ width: "210mm", height: "auto" }} />
    </>
  );
}

export default Index;
