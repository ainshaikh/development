import React, { Component } from 'react'
import { movies } from './getMovies'


export default class banner extends Component {
  render() {
    // console.log(movies.results[0]);
    let movie = movies.results[0];
    return (
        <>
        {movie ==""? (

        
        <div class="spinner-border text-secondary" role="status">
         <span class="visually-hidden">Loading...</span>
    </div>
        ):(

      <div className="card banner-card">
  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <p className="card-text">{movie.overview}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
)}
</>
    );
  }
}