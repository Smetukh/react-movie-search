import React from "react";
import "./styles.css";
import InputForm from "./components/InputForm";
import MovieList from "./components/MovieList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      submitValue: "",
      isLoaded: false,
      items: []
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

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.inputValue !== this.state.inputValue) {
  //     //Perform some operation here
  //     console.log("this.state.inputValue = ", this.state.inputValue);
  // fetch(
  //   `https://api.themoviedb.org/3/search/movie?api_key=81cfc9e7f03740911f7568ce112347b3&language=en-US&query=${
  //     this.state.inputValue
  //   }&page=1&include_adult=false`
  // )
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(data) {
  //     console.log(data.results);
  //   });

  // this.setState({someState: someValue});
  // this.classMethod();
  //   }
  // }

  onSubmit = inputValue => {
    this.setState({ submitValue: this.state.inputValue });
  };

  onChangeHandler = inputValue => {
    this.setState({ inputValue: inputValue });
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
        {this.state.items ? <MovieList list={this.state.items} /> : null}
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
