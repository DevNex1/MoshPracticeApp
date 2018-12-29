import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleReset = () => {
    this.setState({ movies: getMovies() });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return (
        <div>
          <span>There are no more movies.</span>
          <span>
            <button
              onClick={e =>
                window.confirm("confirm or cancel!") && this.handleReset()
              }
              className="btn-success btn-sm"
            >
              Reset
            </button>
          </span>
        </div>
      );
    return (
      <div>
        <p>There are {count} in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
    );
  }
}

export default Movies;
