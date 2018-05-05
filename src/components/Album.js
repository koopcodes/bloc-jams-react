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

formatTime(time) {
    return time ? `${Math.floor(time / 60)}:${Number(time % 60 / 100).toFixed(2).substr(2,3)}` : '-:--'
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
				<caption> Songs from {this.state.album.title} </caption>
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
						{this.state.album.songs.map((song, index) => (
							<tr className={song} key ={index}>
								<td className="song-actions">
                  <button>
                    <span className="song-number">{index+1 }</span>
                    <span className="ion-play"></span>
                    <span className="ion-pause"></span>
                  </button>
                </td>
								<td className="song-title"><Link to={`${song.audioSrc}`}>{ song.title }</Link></td>
								<td className="song-duration">{ this.formatTime(song.duration) } </td>
							</tr>
        ))}
					</tbody>
        </table>
      </section>
    );
  }
}

export default Album;
