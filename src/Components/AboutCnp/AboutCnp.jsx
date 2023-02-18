import React from "react";
import imageOne from "../../assets/img-1.jpg";
import imageTwo from "../../assets/img-2.jpg";
import "./About.Style.css";
import { Img } from "./aboutcnp.styled";
const AboutCnp = () => {
  return (
    <div className="about-cnp">
      <main>
        <div className="container">
          <div>
            <h2>
              ARAPAHOE is an American creative studio. We design world-className
              brands & digital experiences.
            </h2>
          </div>
          <Img>
            <img src={imageOne} alt="image" aria-label="image" />
          </Img>
          <div className="services">
            <h2>Services</h2>
            <div className="row">
              <div>
                <span>Branding</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  id sagittis eros, nec tempus tortor. Nulla tincidunt libero
                  erat, in viverra turpis fringilla in. Phasellus sed gravida
                  nulla, eget scelerisque turpis. Curabitur ut velit dapibus,
                  aliquam nibh eget, aliquet est.
                </p>
              </div>
              <div>
                <span>Digital</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  id sagittis eros, nec tempus tortor. Nulla tincidunt libero
                  erat, in viverra turpis fringilla in. Phasellus sed gravida
                  nulla, eget scelerisque turpis. Curabitur ut velit dapibus,
                  aliquam nibh eget, aliquet est.
                </p>
              </div>
            </div>
          </div>
          <Img>
            <img src={imageTwo} alt="image" aria-label="image" />
          </Img>
          <div className="join">
            <h2>Wanna join forces?</h2>
            <a href="https://calendly.com/" target="blank">
              <button className="schedule-call">Schedule a call</button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutCnp;
