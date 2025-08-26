import React, { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button>Change Color</button>
    </div>
  );
};

export default ChangeColor;
