import React, { useEffect, useState } from "react";
import CircularProgessiveBar from "./CircularProgessiveBar";
import { FaArrowUp } from "react-icons/fa6";

const Card = ({ color, number, title, progress, colorSecond }) => {
  //   const [progress, setProgress] = useState(90);

  //

  return (
    <div className="flex items-center bg-white rounded-[11px]  p-[22px] justify-between">
      <div className="flex flex-col items-start gap-y-[17px]">
        <div className="flex items-center ">
          <span
            className={`${
              colorSecond == "#FFF2F2"
                ? "bg-[#F700000D] text-[#F70000]"
                : "bg-[#E9FFF6] text-green-500"
            }  flex items-center gap-x-1 font-light rounded-full px-2 py-1 mr-2`}
          >
            <FaArrowUp />
            <span className="text-sm">33.77%</span>
          </span>
        </div>
        <div className="flex flex-col gap-y-[3px]">
          <h2 className="text-xl font-poppins text-[#777777]">{title}</h2>
          <p className="text-[32px] font-bold">{number}</p>
        </div>
      </div>
      <div className="">
        <CircularProgessiveBar
          size={120}
          color={color}
          progress={progress}
          strokeWidth={11}
          colorSecond={colorSecond}
        />
      </div>
    </div>
  );
};

export default Card;
