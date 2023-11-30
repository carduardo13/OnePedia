import React from "react";

function PrimaryButton({ buttonText, handleClick }: IPrimaryButton) {
  return (
    <button
      onClick={handleClick}
      className="bg-red-500 rounded text-white w-full py-2 animate-fade"
    >
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
