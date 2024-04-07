import React, { memo } from "react";

const Button = memo(({ name, fu }) => {
  return (
    <button
      className="bg-white text-green-500 mx-3 px-3 p-2 rounded-md uppercase my-3"
      onClick={() => fu()}>
      {name}
    </button>
  );
})

export default Button;



