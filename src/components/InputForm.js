import React from "react";

const InputForm = ({ inputValue, onSubmit, onChangeHandler }) => {
  const submitHandler = () => {
    onSubmit(inputValue);
  };
  const changeHandler = e => {
    onChangeHandler(e.target.value);
  };
  return (
    <div className="inputContainer">
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button onClick={submitHandler}>Search</button>
    </div>
  );
};

export default InputForm;
