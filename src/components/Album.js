import React, { Component } from "react";
import albumData from "./../data/albums";
import { Link } from "react-router-dom";

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album
    };
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={ this.state.album.albumCover } alt={ this.state.album.title } />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo} </div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
					<tbody>
						<tr>
							<th>Track #</th>
							<th>Title</th>
							<th>Duration</th>
						</tr>
						{this.state.album.songs.map((title, index) => (
							<tr>
								<td>{ "# " + this.state.album.songs.index } </td>
								<td><Link to={`/album/${this.state.album.slug}/${this.state.album.songs.audioSrc}`} key={index}>{ "Title " + this.state.album.songs.title }</Link></td>
								<td>{ "Duration " + this.state.album.songs.duration } </td>
							</tr>
        ))}
					</tbody>
        </table>
      </section>
    );
  }
}

export default Album;
