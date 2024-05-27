import React from "react";
import aboutImage from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[130px] xl:gap-0  justify-between"></div>
        {/* about image */}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img  src={aboutImage} alt="" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="" />
          </div>
        </div>
        {/* about content */}
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Proud to be one of nations best</h2>
          <p className="text_para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            deleniti corporis quaerat aperiam consequuntur voluptates, illo
            quibusdam qui cumque asperiores ad excepturi aliquid ex debitis
            placeat non amet at sapiente.
          </p>
          <Link to="/">
            <button className="btn">Learn more </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
