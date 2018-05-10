import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span className="slogan">Koop's Bloc Jams: Tunes to code by</span>
        </header>
        <nav>
          <Link to="/" alt="Home">
            Home{" "}
          </Link>
          <Link to="/library" alt="Records you can play">
            {" "}
            Albums{" "}
          </Link>
          <Link to="/about" alt="About this project">
            {" "}
            About
          </Link>
          <a
            href="https://github.com/koopdev/bloc-jams-react"
            alt="Link to Source Code"
            target="_blank"
            rel="noopener noreferrer">
            {" Source Code "}</a>
          <span className="social">
            <a
              href="https://github.com/koopdev/"
              className="ion-social-github"
              alt="Link to Source Code"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
            </a>
            <a
              href="https://twitter.com/koopdev/"
              className="ion-social-twitter"
              alt="Link to Source Code"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
            </a>
            <a
              href="https://www.facebook.com/brent.kupras/"
              className="ion-social-facebook"
              alt="Link to Source Code"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
            </a>
            <a
              href="https://www.linkedin.com/in/koopcodes/"
              className="ion-social-linkedin"
              alt="Link to Source Code"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
            </a>
          </span>
          <span className="copyRight"> Koop Codes ©2018</span>
        </nav>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/about" component={About} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
