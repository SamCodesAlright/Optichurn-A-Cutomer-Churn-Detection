import React from "react";
import styles from "../style";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "../Data/sourceData.json";
import revenueData from "../Data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "white";

const DataVisuals = () => {
  return (
    <section className="w-full">
      <h1 className={`${styles.heading2} ${styles.flexCenter} mb-12`}>
        Customer Churn Data-Visualisation
      </h1>
      <div className="flex flex-col lg:flex-row justify-between p-4">
        <div className="lg:w-1/3 lg:h-[462px] sm:h-[326px] md:h-[326px] bg-gray-700 p-6 rounded-md mb-4 lg:mb-0">
          <Bar
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  // Fetching the data from "sourceData.json" file using "map()" function
                  data: sourceData.map((data) => data.value),
                  // Providing color to the bars from chart.js documentation
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue Source'
                    }
                }
            }}
          />
          <p className="text-white">Box 1</p>
        </div>

        <div className="lg:w-1/3 lg:h-[462px] sm:h-[326px] md:h-[326px] bg-gray-700 p-6 rounded-md mb-4 lg:mb-0 lg:ml-4">
          <Line
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor: "#064ff0",
                  borderColor: "#064ff0",
                },
                {
                  label: "Cost",
                  data: revenueData.map((data) => data.cost),
                  backgroundColor: "#ff3030",
                  borderColor: "#ff3030",
                },
              ],
            }}
            options={{
                elements: {
                    line: {
                        tension: 0.5
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Revenue & Cost'
                    }
                }
            }}
          />
          <p className="text-white">Box 2</p>
        </div>

        <div className="lg:w-1/3 lg:h-[462px] sm:h-[326px] md:h-[326px] bg-gray-700 p-6 rounded-md lg:ml-4">
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  // Fetching the data from "sourceData.json" file using "map()" function
                  data: sourceData.map((data) => data.value),
                  // Providing color to the bars from chart.js documentation
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                },
              ],
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue Sources'
                    }
                }
            }}
          />
          <p className="text-white">Box 3</p>
        </div>
      </div>
    </section>
  );
};

export default DataVisuals;
