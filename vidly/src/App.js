import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
// import MoviesExample from "./components/moviesExample";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
        {/* <MoviesExample /> */}
      </main>
    );
  }
}

export default App;
