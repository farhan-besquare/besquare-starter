import React from "react";

function BoxComponent() {
  const [name, setColorName] = React.useState("Red");
  const handleClick = () => {
    setColorName("blue");
  };
  const [color, setColor] = React.useState("Red");
  const handleColor = () => {
    setColor("blue");
  };

  return (
    <>
      <div>
        <button style={{ backgroundColor: color }} onClick={handleColor}>
          Click to change color {color}
        </button>
      </div>
    </>
  );
}

export default BoxComponent;
