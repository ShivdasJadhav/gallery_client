import React from "react";

function CoverLoad() {
  return (
    <div className="h-64 animate-pulse  my-4 md:my-2 md:m-0 relative border border-sky-600 rounded-xl bg-white bg-no-repeat bg-center bg-cover">
      <div className="mt-auto rounded-xl border border-fuchsia-600 border-x-0 border-b-0 bg-white hover:cursor-pointer absolute bottom-0 h-32 w-full">
        <h3 className="bg-gray-200 text-allura w-5/12 h-4 text-base mx-auto my-1"></h3>
        <p className="h-3/6 text-xs bg-gray-200 leading-1 text-fjord_one mx-4 text-justify overflow-hidden "></p>
        <p className="bg-gray-200 w-2/12 h-2 text-allura mr-4 text-xs mt-2 float-right"></p>
      </div>
    </div>
  );
}

export default CoverLoad;
