import React from "react";
import Header from "../components/Header";
import "./about.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <Header
        title="About Sweetist"
        desc="An online store inspired by the sweetness of life"
      />
      <div className="about-content">
        <span>
          Etiam facilisis vitae leo at cursus. Donec ac est quis orci blandit
          luctus eget faucibus justo. Suspendisse eu velit ullamcorper,
          sollicitudin metus id, ornare quam. In molestie urna porttitor arcu
          egestas mollis. Sed vitae ligula eleifend ligula pharetra consectetur
          a congue enim. Sed fermentum urna sed diam molestie sagittis. Mauris
          porttitor ligula vel euismod dictum. Morbi nunc odio, aliquam porta
          metus quis, eleifend volutpat diam. Duis varius ornare sapien. Ut nec
          pellentesque quam. Phasellus pulvinar velit eu eros sagittis, vel
          tempor odio rutrum. Phasellus eu sodales dolor.
        </span>
        <img
          className="about-img"
          src="https://images.unsplash.com/flagged/photo-1561668038-2742fcef75d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <span>
          Vivamus nec lectus consectetur, venenatis ante non, egestas nunc.
          Pellentesque non metus quis nibh ultrices interdum. Etiam hendrerit
          vitae tellus non sollicitudin. Aenean dui nisl, malesuada in purus
          vel, sagittis molestie lorem. Nunc eu purus id lectus lacinia
          ullamcorper nec vel erat. Aliquam et neque orci. Nulla ac vulputate
          sapien. Nulla sagittis mattis nisl eget commodo. Pellentesque vitae
          tortor eros. Ut sed ipsum aliquet, lacinia ligula at, sagittis tortor.
          Praesent urna dui, facilisis ut efficitur id, bibendum iaculis purus.
          Nullam vehicula neque nec magna interdum bibendum. Sed a augue sapien.
          Pellentesque molestie ullamcorper pulvinar. Donec tempus, erat ac
          eleifend vehicula, nunc justo rhoncus sapien, nec commodo libero diam
          eu lacus.
        </span>
      </div>
    </div>
  );
};

export default About;
