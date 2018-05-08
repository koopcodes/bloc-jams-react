import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import logo from "./img/musicspheresfibon.jpg";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import About from "./components/About";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
					<img className="logo" src={logo} alt="Logo" />
					<h1>Bloc Jams by Koop</h1>
					<section className="slogan">Music to think by</section>
				</header>
        <div className="sidebar">
				<nav>
            <Link to="/">Home</Link><p></p>
            <Link to="/library">Library</Link><p></p>
						<Link to ="/about">About</Link><p></p>
						<a href="https://github.com/koopdev/bloc-jams-react" target="_blank" rel="noopener noreferrer">Source Code</a>
          </nav>

				</div>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
					<Route path="/about" component={About} />
        </main>
				<footer>
					<p>Koop Codes ©2018</p>
				</footer>
      </div>
    );
  }
}

export default App;
