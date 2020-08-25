import React from 'react';
import './App.css';
import {moviesData} from '../movieData'
import MovieItem from './MovieItem'

class App extends React.Component {

	constructor() {
		super();

		this.state = {
			movies: moviesData,
			moviesWillWatch: []
		};
	}

	removeMovie = movie => {
		const updateMovies = this.state.movies.filter(function(item) {
			return item.id !== movie.id;
		});

		this.setState({
			movies: updateMovies
		});
	}

	addMovieWillWatch = movie => {
		const updateMovieWillWatch = [...this.state.moviesWillWatch];
		updateMovieWillWatch.push(movie);

		this.setState({
			moviesWillWatch: updateMovieWillWatch
		});
	}

	removeMovieFromWillWatch = movie => {
		const updateMovieWillWatch = this.state.moviesWillWatch.filter(function(item) {
			return item.id !== movie.id;
		});

		this.setState({
			moviesWillWatch: updateMovieWillWatch
		});
	}

	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-9">
						<div className="row">
							{this.state.movies.map(movie => {
								return (
									<div className="col-6 mb-4" key={movie.id} >
										<MovieItem 
											movie={movie} 
											removeMovie={this.removeMovie}
											addMovieWillWatch={this.addMovieWillWatch}
											removeMovieFromWillWatch={this.removeMovieFromWillWatch}
										/>
									</div>
								);
							})}
						</div>
					
					</div>
					<div className="col-3">
						<p>Will Watch: {this.state.moviesWillWatch.length}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
