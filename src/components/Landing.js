import React from "react";
import logo from ".././img/musicspheresfibon1.jpg";
import "./Landing.css";


const Landing = () => (
  <section className="main">
	  <img className="logo" src={logo} alt="Logo" />
    <section className="selling-points">
        <p className="point-title">Music can help you focus</p>
        <p className="point-description">
          It depends on the task and on the type of music, but <a href="https://www.popsci.com/music-and-concentration" alt="Music only helps you concentrate if you’re doing the right kind of task"
            target="_blank"
            rel="noopener noreferrer">
            {"if the task requires creativity or some element of mental rotation then listening to music one likes "}
          </a> can increase performance</p>
        <p className="point-title">Get in the Flow, Stay in the Flow</p>
        <p className="point-description">
          These pieces are lyric-less to encourage maximum concentration. Pace and rythym, fast but not too fast, are important
        </p>
        <p className="point-title">But not for TOO long</p>
        <p className="point-description">
          Once you are in the code Flow it is tempting to stay there.  But sitting is the new smoking, so aAfter playing through the 5 pieces twice (~35 minutes) get up and walk around for 5 minutes
        </p>
    </section>
  </section>
);

export default Landing;
