import React from "react";

const SalesMetrics = () => {
  return (
    <div className="flex-grow px-[23px] pt-4 pb-14 mt-4 bg-white rounded-xl font-poppins">
      <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
      <div className="flex flex-col gap-y-[20px]">
        <div className="flex items-center justify-between">
          <span className="text-[#777777]">Orders</span>
          <span>
            126777 <span className="text-[#777777]">-12</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#777777]">Units</span>
          <span>
            64665 <span className="text-[#777777]">-44</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#777777]">Buyers</span>
          <span>
          8898 <span className="text-[#777777]">-12</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#777777]">Unique Buyers</span>
          <span>
          8989 <span className="text-[#777777]">-12</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#777777]">Average Purchase</span>
          <span>
          98989 <span className="text-[#777777]">-12</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesMetrics;
