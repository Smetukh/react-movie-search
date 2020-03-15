import React from "react";
import "./styles.css";
import InputForm from "./components/InputForm";
import MovieList from "./components/MovieList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      isLoaded: false,
      items: null
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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  onSubmit = inputValue => {
    this.setState({ inputValue: inputValue });
  };

  render() {
    console.log("items = ", this.state.items);
    return (
      <div className="App">
        <InputForm onSubmit={this.onSubmit} />
        {this.state.items ? <MovieList list={this.state.items} /> : null}
        <p>{this.state.inputValue}</p>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
