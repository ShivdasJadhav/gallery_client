import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function Community() {
  const data = {
    labels: ["Artists", "Enthusiasts", "Organizations"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF10FF", "#349DFF", "#FF56FF"],
      },
    ],
  };
  const config = {
    rotation: 90,
  };
  return (
    <div id="community" className="p-2 my-2 text-fjord_one md:w-4/12 mx-auto">
      <h2 className="text-center text-2xl text-medium text-allura text-fuchsia-900">
        Community
      </h2>
        <Doughnut config={config} data={data} />
      <div className="h-1 bg-fuchsia-400 w-2/6 mx-auto rounded-full drop-shadow-xl shadow-fuchsia-800 my-2 opacity-20">
      </div>
    </div>
  );
}

export default Community;
