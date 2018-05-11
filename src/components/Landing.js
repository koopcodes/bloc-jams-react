import React from "react";
import logo from ".././img/musicspheresfibon1.jpg";
import "./Landing.css";

const Landing = () => (
  <section className="main">
    <img className="logo" src={logo} alt="Logo" />
    <section className="selling-points">
      <div className="point-title">Music can help you focus</div>
      <span className="point-description">
        It depends on the task and on the type of music, but{" "}
        <a
          href="https://www.popsci.com/music-and-concentration"
          className="underlineThis"
          alt="Music only helps you concentrate if you’re doing the right kind of task"
          target="_blank"
          rel="noopener noreferrer">
          {"if the task requires creativity or some element of mental rotation "}
        </a>then listening to music one likes can increase performance
      </span>
      <div className="point-title">Get in the Flow, Stay in the Flow</div>
      <span className="point-description">
        These pieces are lyric-less to encourage maximum concentration. Pace and rythym, fast but not too fast, are
        important
      </span>
      <div className="point-title">But not for TOO long</div>
      <span className="point-description">
        Once you are in the code Flow it is tempting to stay there. But{" "}
        <a
          href="https://www.cnn.com/2017/09/11/health/sitting-increases-risk-of-death-study/index.html"
          className="underlineThis"
          alt="link to CNN article"
          target="_blank"
          rel="noopener noreferrer">
          {"sitting is the new smoking"}
        </a>, so after playing through the 5 pieces twice (~35 minutes) get up and walk around for 5 minutes
      </span>
    </section>
  </section>
);

export default Landing;
