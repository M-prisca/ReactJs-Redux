import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeThemeColor } from "../Features/theme.js";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="border-2 border-black  rounded"
        type="text"
        onChange={(event) => setColor(event.target.value)}
      />
      <button
        className="text-lg bg-gray-500 ml-2 rounded"
        onClick={() => dispatch(changeThemeColor(color))}
      >
        Change Color
      </button>
    </div>
  );
};

export default ChangeColor;
