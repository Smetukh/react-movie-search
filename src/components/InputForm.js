import React, { useState } from "react";

const InputForm = props => {
  const [inputValue, setInputValue] = useState(null);
  return (
    <form onSubmit={() => {}}>
      <label>
        Name:
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default InputForm;
