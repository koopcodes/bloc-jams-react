import React, { Component } from 'react';

class PlayerBar extends Component {
	render() {
		return (
			<section className="player-bar">
				Currently playing :
				<section id="current-song-displayed">
					{this.props.currentSong.title} by {this.props.artist}
				</section>
				<div className="current-time">
					{this.props.formatTime(this.props.currentTime)} / {this.props.formatTime(this.props.duration)}
				</div>

				<section id="time-control">
					<input
						type="range"
						className="seek-bar"
						value={this.props.currentTime / this.props.duration || 0}
						max="1"
						min="0"
						step="0.01"
						onChange={this.props.handleTimeChange}
					/>
				</section>

				<section id="buttons">
					<div className="btn-group" role="group" aria-label="Basic example">
						<button id="previous" className="btn btn-secondary btn-lg" type="button" onClick={this.props.handlePrevClick}>
							<span className="ion-skip-backward" />
						</button>
						<button id="play-pause" className="btn btn-secondary btn-lg" type="button" onClick={this.props.handleSongClick}>
							<span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'} />
						</button>
						<button id="next" className="btn btn-secondary btn-lg" type="button" onClick={this.props.handleNextClick}>
							<span className="ion-skip-forward" />
						</button>
					</div>
				</section>

				<section id="volume-control">
					<span className="ion-volume-low" onClick={this.props.handleVolumeDownClick} />
					<input
						type="range"
						className="seek-bar"
						value={this.props.volume}
						max="1"
						min="0"
						step="0.01"
						onChange={this.props.handleVolumeChange}
					/>
					<span className="ion-volume-high" onClick={this.props.handleVolumeUpClick} />
				</section>

			</section>
		);
	}
}

export default PlayerBar;
