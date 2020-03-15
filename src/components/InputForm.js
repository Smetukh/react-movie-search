import React from "react";

// const InputForm = props => {
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  submitHandler = () => {
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
    this.setState({ value: "" });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputForm;
