import React from "react";

function ErrorHandler({ error }) {
  const renderedError = error.slice(17 , (error.length-2)).toUpperCase();
  console.log(renderedError);
  
  return (
    <>
      <div>
        <h3 className="p-3 mt-[5px] mb-[5px] bg-[#e65046] text-center font-bold text-[#fff] w-full">
          { renderedError }
        </h3>
        <span>
          
        </span>
      </div>
    </>
  );
}

export default ErrorHandler;
