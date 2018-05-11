import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
			<div className="About"><p>This was a project for my apprenticeship at Bloc. Aside from using React and React Router, the requirements were:</p>

				When I visit the site, I see the name of the site, a slogan, and a brief list of features.
				When I visit the site, I see a link to a Library page in the header
				I can click on the link for the Library page
				When I visit the Library page, I see a list of albums
				I see a cover image, title, and artist for each album
				I immediately see an album cover image, the album's title, the artist's name, and some general release info
				I see a list of the album's songs
				When I click on a song, it plays
				When I click on a playing song, it pauses
				When I hover over a song, it displays a "play" button in place of the song number
				The currently playing song displays a "pause" button in place of the song number
				A paused song displays a "play" button in place of the song number
				Regardless of scroll position, I see a "player bar" with controls for: Play/Pause, Previous Track, Next Track, Seek, and Volume
				The Play/Pause button shows a "play" icon if no song is currently playing
				The Play/Pause button shows a "pause" button if a song is playing
				The Previous Track and Next Track buttons only respond when a song is currently playing
				The Previous Track button plays the previous song on the album
				The Previous Track button doesn't respond if there is no previous song
				The Next Track button plays the next song on the album
				The Next Track button doesn't respond if there is no next song
				I see a slider that shows the current time position of the song
				I can click and drag on the time control slider to change the current song position
				I see a slider that shows the player's current volume
				I can click and drag on the volume slider to adjust the volume
			</div>
		);
	}
}

export default About;
