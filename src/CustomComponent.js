import React, { useState } from "react";

const CustomComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    console.log(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Вывести в консоль</button>
    </div>
  );
};

export default CustomComponent;
