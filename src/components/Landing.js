import React from 'react';
import logo from '.././img/musicspheresfibon1.jpg';

const Landing = () => (
	<section className="landing">
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="appname">Koop Jams</h1>
				<p className="hero-title">Tunes to Code by !!!!!</p>
			</div>
		</div>

		<section id="main">
			<img src={logo} id="logo" alt="Logo" />
			<section className="selling-points">
				<div className="point1">
					<h2 className="point-title">Music can help you focus</h2>
					<p className="point-description">
						It depends on the task and on the type of music, but{' '}
						<a
							href="https://www.popsci.com/music-and-concentration"
							className="underlineThis"
							alt="Music only helps you concentrate if you’re doing the right kind of task"
							target="_blank"
							rel="noopener noreferrer">
							{'if the task requires creativity or some element of mental rotation '}
						</a>
						then listening to music one likes can increase performance
					</p>
				</div>
				<div className="point2">
					<h2 className="point-title">
						Get in the{' '}
						<a
							href="https://en.wikipedia.org/wiki/Flow_%28psychology%29"
							className="underlineThis"
							alt="Flow wiki article"
							target="_blank"
							rel="noopener noreferrer">
							{' '}
							{'Flow'}
						</a>{' '}
						and stay there{' '}
					</h2>
					<p className="point-description">
						These pieces are lyric-less to encourage maximum concentration. Pace and rythym, fast but not too fast, are
						important
					</p>
				</div>

				<div className="point3">
					<h2 className="point-title">But not for TOO long</h2>
					<p className="point-description">
						Once you are in the code Flow it is tempting to stay there. But{' '}
						<a
							href="https://www.cnn.com/2017/09/11/health/sitting-increases-risk-of-death-study/index.html"
							alt="link to CNN article"
							target="_blank"
							rel="noopener noreferrer">
							{'sitting is the new smoking'}
						</a>
						, so after playing through the 5 pieces twice (~35 minutes) get up and walk around for 5 minutes
					</p>
				</div>
			</section>
		</section>
	</section>
);

export default Landing;
