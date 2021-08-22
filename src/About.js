import React from "react";
import web from "../src/images/hero2.png";
import Common from "./Common";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <Common
        name="Welcome Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
