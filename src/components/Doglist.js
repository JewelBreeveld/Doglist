import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DogList extends Component {
  renderDogBreed(breed) {
    return (
      <li key={breed}>
        <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
      </li>
    );
  }

  render() {
    const { dogBreeds } = this.props;

    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {!dogBreeds && "Loading..."}
        {dogBreeds && (
          <ul key={this.renderDogBreed}>
            {dogBreeds.map(this.renderDogBreed)}{" "}
          </ul>
        )}
      </div>
    );
  }
}

// line 30 - 34 (below, was underneath <h1>Dogs List</h1>) 'if' this.state.dogBreeds === null 'then' display "Loading ..." AND 'if' this.state.dogBreeds !== null 'then' display array of dogbreeds.
// { this.state.dogBreeds === null
//     && 'Loading...' }
// { <ul>
//     { this.state.dogBreeds !== null
//         && this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>) }
// </ul> }
