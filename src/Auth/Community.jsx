import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function Community() {
  const data = {
    // labels: ["Artists", "Enthusiasts", "Organizations"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF10FF", "#349DFF", "#a21caf"],
      },
    ],
  };
  const config = {
    rotation: 90,
  };
  return (
    <div id="community" className="p-2 my-2 text-fjord_one bg-cover md:py-8 ">
      <h2 className="text-center text-2xl text-medium text-allura text-fuchsia-900 md:text-4xl">
        Community
      </h2>
      <div className="flex flex-col md:flex-row py-8 md:w-8/12 mx-auto items-center">
        <div className="md:w-5/12 md:h-auto md:mx-20">
          <Pie config={config} data={data} />
          <div className="h-1 bg-fuchsia-600 w-2/6 mx-auto rounded-full drop-shadow-xl shadow-fuchsia-800 my-2 opacity-20 "></div>
        </div>
        <div className="flex md:flex-col my-4 md:mx-20">
          <div className="flex md:m-3">
            <p
              className="w-4 h-4 mx-2 border md:w-8 md:h-8"
              style={{ background: "#FF10FF" }}
            ></p>
            <span className="text-fjord text-sm text-gray-900 md:text-xl">
              Artist
            </span>
          </div>
          <div className="flex md:m-3">
            <p
              className="w-4 h-4 mx-2 border md:w-8 md:h-8"
              style={{ background: "#349DFF" }}
            ></p>
            <span className="text-fjord text-sm text-gray-900 md:text-xl">
              Enthusiasts
            </span>
          </div>
          <div className="flex md:m-3">
            <p
              className="w-4 h-4 mx-2 border md:w-8 md:h-8"
              style={{ background: "#a21caf" }}
            ></p>
            <span className="text-fjord text-sm text-gray-900 md:text-xl">
              Organizations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
