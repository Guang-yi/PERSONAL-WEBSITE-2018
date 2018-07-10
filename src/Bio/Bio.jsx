import React, {Component} from 'react';

class Bio extends Component{
	render(){
		return(
			<div>
				<h1>Background FAQ</h1>
				<ul>
					<li>
						<h2>Where are you from?</h2>
						<p>I've lived in a lot of places. Notably, Chengdu | China (Birthplace), Singapore, Boise | ID (All through high school), Durham | NC, London | UK, and now Seattle | WA:  </p>
					</li>
					<li>
						<h2>Favorite Quote</h2>
						<p>My idol, Steve Jobs: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition."</p>
					</li>
					<li>
						<h2>Favorite Food</h2>
						<p>Din Tai Fung, Japanese, and fresh bites from Pike's Place Market</p>
					</li>
					<li>
						<h2>Favorite Books</h2>
						<p>Siddhartha:Hesse, 4 Hour Work Week: Tim Ferris, Zero to One: Peter Thiel (I have a Signed Copy!)</p>
					</li>
					<li>
						<h2>Hobbies</h2>
						<p>Tutoring, LeetCode, Browsing Reddit, Lego, Basketball, Ultimate Frisbee, Nerf Guns</p>
					</li>
					<li>
						<h2>Anything else?</h2>
						<p>I've said too much</p>
					</li>
				</ul>
			</div>

		);
	}
}

export default Bio;
