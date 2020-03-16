import React from "react";

const InputForm = props => {
  const submitHandler = () => {
    props.onSubmit(props.inputValue);
  };
  const changeHandler = e => {
    props.onChangeHandler(e.target.value);
  };
  return (
    <>
      <input type="text" value={props.inputValue} onChange={changeHandler} />
      <button onClick={submitHandler}>Submit</button>
    </>
  );
};

export default InputForm;
