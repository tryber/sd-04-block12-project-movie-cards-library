// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import movies from '../data';


class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.imagePath} alt="movie" />
        <h4>{this.props.movie.title}</h4>
        <h5>{this.props.movie.subtitle}</h5>
        <p>{this.props.movie.storyline}</p>
        <Rating rating= {this.props.movie.rating} />
      </div>
    );
  }
}

export default MovieCard;
