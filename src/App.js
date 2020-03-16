import React from "react";
import "./styles.css";
import InputForm from "./components/InputForm";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      submitValue: "",
      isLoaded: false,
      items: [],
      movie: null,
      recommendations: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=81cfc9e7f03740911f7568ce112347b3`
    )
      .then(res => res.json())
      .then(
        result => {
          console.log("result = ", result);
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.submitValue &&
      prevState.submitValue !== this.state.submitValue
    ) {
      //fetch searched movies from api
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=81cfc9e7f03740911f7568ce112347b3&language=en-US&query=${
          this.state.submitValue
        }&page=1&include_adult=false`
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            items: data.results
          })
        );
    }

    if (this.state.movie) {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          this.state.movie.id
        }/recommendations?api_key=81cfc9e7f03740911f7568ce112347b3`
      )
        .then(response => {
          return response.json();
        })
        .then(recommendations => {
          if (
            recommendations &&
            recommendations.results &&
            recommendations.results.length
          ) {
            this.setState({
              recommendations: recommendations.results.slice(0, 3)
            });
          }
        });
    }
  }

  onSubmit = () =>
    this.setState({
      submitValue: this.state.inputValue,
      inputValue: "",
      movieId: null
    });

  onChangeHandler = inputValue => this.setState({ inputValue });

  loadDetails = movie => {
    console.log("id = ", movie);
    this.setState({
      movie
    });
  };
  render() {
    return (
      <div className="App">
        <p>{this.state.submitValue}</p>
        <InputForm
          onSubmit={this.onSubmit}
          onChangeHandler={this.onChangeHandler}
          inputValue={this.state.inputValue}
        />
        {this.state.movie ? (
          <MovieDetails
            movie={this.state.movie}
            recommendations={this.state.recommendations}
          />
        ) : null}
        {this.state.items && !this.state.movie ? (
          <MovieList list={this.state.items} loadDetails={this.loadDetails} />
        ) : null}

        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
