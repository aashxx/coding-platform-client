import React from "react";

const Loader = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[black] bg-opacity-75 z-[1000]">
        <div className="ease-linear rounded-full border-8 border-t-8 border-t-indigo-500 border-gray-200 h-12 w-12 animate-spin"></div>
      </div>
    );
};

export default Loader;
  