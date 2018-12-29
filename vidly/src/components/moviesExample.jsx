import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class MoviesExample extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    if (this.state.movies.length === 0)
      return <p>There are no Movies in the Database.</p>;

    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the datebase.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(m => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  {" "}
                  <i class="fas fa-heart" />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(m)}
                    className="btn btn-danger btn-s"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesExample;
