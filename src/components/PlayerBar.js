import React, { Component } from 'react';

class PlayerBar extends Component {
	render () {
		return (
			<section className="player-bar">Currently playing:
				<section id="current-song-displayed">
					{this.props.currentSong.title} by {this.props.artist}
				</section>
        <section id="time-control">
           <input
             type="range"
             className="seek-bar"
             value={(this.props.currentTime / this.props.duration) || 0}
             max="1"
             min="0"
             step="0.01"
						 onChange={this.props.handleTimeChange}
           />
           <div className="total-time">{ this.props.formatTime(this.props.currentTime) } / {this.props.formatTime(this.props.duration)}</div>
        </section>

				<section id="buttons">
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick} >
						<span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick} >
             <span className="ion-skip-forward"></span>
           </button>
        </section>
<p></p>
        <section id="volume-control">
            <input
					 		type="range"
							className="seek-bar"
							value={this.props.volume}
							max="1"
							min="0"
              step="0.01"
							onChange={this.props.handleVolumeChange}
						/>
					<div className="icon ion-volume-low" onClick={ this.props.handleVolumeDownClick}>Vol -</div>
				  <div className="icon ion-volume-high" onClick={ this.props.handleVolumeUpClick}>Vol +</div>
        </section>
			</section>
		);
	}
}

export default PlayerBar;
