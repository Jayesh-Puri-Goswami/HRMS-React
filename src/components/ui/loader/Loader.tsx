import React from "react";
import "./Loader.css";
import clsx from "clsx";

import { LoaderProps } from "../../../types/Loader";

const Loader: React.FC <LoaderProps> = ({className}) => {
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

      <div className={clsx('min-h-screen bg-transparent',className)}>
        <div className="">
          <img className="w-15 h-15 absolute -translate-1/2 top-1/2 left-[50%] z-50 " src="/images/logo/CSL-Monogram.svg" alt="" />
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
