/*jshint esversion: 6 */
import React from "react";
import logo from "./1k5bq0.jpg";

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Crank it up to 11!</h1>
    <img src={logo} alt="Logo" />
    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Choose your tunes</h2>
        <p className="point-description">
          The world is full of music; who knows what you want better than you?
        </p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">
          No arbitrary limits.No distractions.
        </p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">
          Listen to your music on the go. This streaming service is available on
          all mobile platforms.
        </p>
      </div>
    </section>
  </section>
);

export default Landing;
