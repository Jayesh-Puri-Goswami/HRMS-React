import React from "react";
import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <img
        className="absolute -translate-x-1/2 left-1/2 w-15 h-15 z-[100]"
        src="/public/images/logo/CSL-Monogram.svg"
        alt=""
      />
      <div className="spinner">
        <div className="spinner1"></div>
      </div>
    </div> */}

      <div className="min-h-screen bg-transparent">
        <div className="">
          <img className="w-15 h-15 absolute -translate-1/2 top-1/2 left-[50%] z-50 " src="/public/images/logo/CSL-Monogram.svg" alt="" />
        </div>
        <div className="LoaderContainer absolute ">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    </>
  );
};

export default Loader;
