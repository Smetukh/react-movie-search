import React from "react";
import "./styles.css";
import InputForm from "./components/InputForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  onSubmit = inputValue => {
    this.setState({ inputValue: inputValue });
    console.log("inputValue = ", inputValue);
  };

  render() {
    console.log("submitValue = ", this.state.inputValue);
    return (
      <div className="App">
        <InputForm onSubmit={this.onSubmit} />
        <p>{this.state.inputValue}</p>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
