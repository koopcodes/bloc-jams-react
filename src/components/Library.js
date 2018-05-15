import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";
import "./Library.css";
import "./../index.css"
import "./../App.css"

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData,
    };
  }
  render() {
    return (
      <section className="library">
        {this.state.albums.map((album, index) => (
          <span className="album-library"><Link to={`/album/${album.slug}`} key={index}>
            <img id="album-cover-art" src={album.albumCover} alt={album.title} />
            <div id="album-info"><span>{album.title }</span>
            <span>{ album.artist }</span>
            <span>{ album.songs.length} songs</span>
						</div>
          </Link>
					</span>
        ))}
      </section>
    );
  }
}
export default Library;
