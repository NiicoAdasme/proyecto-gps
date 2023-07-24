import React from "react";
import { Bars } from "react-loader-spinner";

const LoadingMask = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black opacity-50 flex items-center justify-center">
        <Bars
          height="80"
          width="80"
          color="#FFFFFF"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default LoadingMask;
