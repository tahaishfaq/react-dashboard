import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const BestSellers = () => {
  const data = {
    labels: [
      "Electronics",
      "Fashion",
      "Furniture",
      "Books",
      "Toys",
      "Groceries",
    ],
    datasets: [
      {
        label: "Best Sellers",
        data: [30, 20, 50, 15, 25, 40],
        backgroundColor: [
          "#F70000",
          "#06E775",
          "#FFA31A",
          "#00A1FF",
          "#FDD834",
          "#00D3BC",
        ],
      },
    ],
  };

  const options = {
    cutout: "40%",
    rotation: -90,
    plugins: {
      legend: {
        display: false, // We will create a custom legend
      },
    },
  };

  return (
    <div className="flex-grow px-[23px] pt-4 pb-14 mt-4 bg-white rounded-xl font-poppins">
      <h2 className="text-2xl font-semibold mb-4">Best Sellers</h2>
      <div className="flex flex-col items-center gap-y-[20px]">
        <div className="bg-gray-100 rounded-full p-5 w-[19.5rem]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <div className=" flex gap-x-2 items-center justify-center text-sm ">
            <div className="flex items-center ">
              <span className="block w-4 h-4 bg-[#F70000]  rounded-full mr-2"></span>
              <span>Electronics</span>
            </div>
            <div className="flex items-center ">
              <span className="block w-4 h-4 bg-[#06E775]  rounded-full mr-2"></span>
              <span>Fashion</span>
            </div>
            <div className="flex items-center ">
              <span className="block w-4 h-4 bg-[#FFA31A]  rounded-full mr-2"></span>
              <span>Furniture</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center justify-center text-sm ">
            <div className="flex items-center ">
              <span className="block w-4 h-4 bg-[#00A1FF]  rounded-full mr-2"></span>
              <span>Electronics</span>
            </div>
            <div className="flex items-center ">
              <span className="block w-4 h-4 bg-[#FDD834]  rounded-full mr-2"></span>
              <span>Fashion</span>
            </div>
            <div className="flex items-center ">
              <span className="block w-4 h-4 bg-[#00D3BC] rounded-full  mr-2"></span>
              <span>Furniture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
