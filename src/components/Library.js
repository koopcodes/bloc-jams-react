import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";
import "./Library.css"

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData
    };
  }
  render() {
    return (
      <section className="library">
			<ul>
        {this.state.albums.map((album, index) => (
          <li><Link to={`/album/${album.slug}`} key={index}>
				    <img id="album-cover-art" src={album.albumCover} alt={album.title} />
            <div>{album.title}</div>
            <div>{album.artist}</div>
            <div>{album.songs.length} songs</div>
          </Link></li>
        ))}
				</ul>
      </section>
    );
  }
}
export default Library;
