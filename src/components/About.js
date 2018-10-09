import React, { Component } from "react";

class About extends Component {
  render() {
    return (
			<div className="About">
			<h1>KoopCodes - KoopJams Music Player</h1>
			<h2>Tunes to Code by</h2>
			<hr></hr>
			<h3>Proof of concept for a mobile-first frontend-only music player app.</h3>
			<h5>Built with:</h5>
			<ul>
				<li>React & ReactDom 16.3.2</li>
				<li>React Router 4.2.2</li>
				<li>Create React App 1.5.2</li>
				<li>Bootstrap 4</li>
				<li>HTML, CSS, JSX, JQuery</li>
				<li>Deployed via Firebase</li>
			</ul>
			<h5>Requirements:</h5>
			<ul>
				<li>When I visit the site, I see the name of the site, a slogan, and a brief list of features.</li>
				<li>When I visit the site, I see a link to a Library page in the header</li>
				<li>I can click on the link for the Library page</li>
				<li>When I visit the Library page, I see a list of albums</li>
				<li>I see a cover image, title, and artist for each album</li>
				<li>I immediately see an album cover image, the album's title, the artist's name, and some general release info</li>
				<li>I see a list of the album's songs</li>
				<li>When I click on a song, it plays</li>
				<li>When I click on a playing song, it pauses</li>
				<li>When I hover over a song, it displays a "play" button in place of the song number</li>
				<li>The currently playing song displays a "pause" button in place of the song number</li>
				<li>A paused song displays a "play" button in place of the song number</li>
				<li>Regardless of scroll position, I see a "player bar" with controls for: Play/Pause, Previous Track, Next Track, Seek, and Volume</li>
				<li>The Play/Pause button shows a "play" icon if no song is currently playing</li>
				<li>The Play/Pause button shows a "pause" button if a song is playing</li>
				<li>The Previous Track and Next Track buttons only respond when a song is currently playing</li>
				<li>The Previous Track button plays the previous song on the album</li>
				<li>The Previous Track button doesn't respond if there is no previous song</li>
				<li>The Next Track button plays the next song on the album</li>
				<li>The Next Track button doesn't respond if there is no next song</li>
				<li>I see a slider that shows the current time position of the song</li>
				<li>I can click and drag on the time control slider to change the current song position</li>
				<li>I see a slider that shows the player's current volume</li>
				<li>I can click and drag on the volume slider to adjust the volume</li>
			</ul></div>
		);
	}
}

export default About;
