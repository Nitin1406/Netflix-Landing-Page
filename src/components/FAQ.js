import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export const FAQ = ({ question,ans1,ans2 }) => {
  const [open, openSet] = useState(false);

  function clickHandler() {
    openSet(!open);
  }

  return (
    <>
      <div className="mb-3">
        <div
          className="w-9/12 border-2 border-red-50 h-20 mx-auto flex justify-between bg-slate-800 hover:bg-slate-600"
          onClick={clickHandler}
        >
          <p className="text-white my-auto ml-9 text-2xl transition-transform">{question}</p>

          <div className="my-auto transition-transform">
            {open && <BsPlusLg className="text-white text-4xl mr-7" />}

            {!open && <RxCross1 className="text-white text-4xl mr-7" />}
          </div>
        </div>

        <div className="mt-1">
           { open &&
            <div className="w-9/12 border-2 border-red-50  mx-auto  bg-slate-800 p-3  transition-transform ">
                    <p className="text-white my-auto ml-7 text-2xl">{ans1}</p>
                    <p className="text-white my-auto ml-7 text-2xl mt-7">{ans2}</p>
            </div>}
        
        </div>
      </div>
    </>
  );
};
