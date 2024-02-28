import React from "react";

const Card1 = () => {
  return (
    <div className=" bg-[#9DCCFF] bg-opacity-[0.2] pb-[40px]">
      <div className="flex justify-between sm:flex sm:flex-col-reverse sm:items-center sm:text-center md:flex md:flex-col-reverse md:items-center md:text-center lg:text-start lg:flex-row  w-[90%] mx-auto ">
        <div className="flex-col  w-[100%] lg:w-[80%] md:w-[100%]">
          <div className=" pt-[40px]">
            By Themodbrains in
            <span className="text-[#49BBBD]"> inspiration</span>
          </div>

          <div className="pt-[10px] text-[44px] font-[600] text-[#2F327D] leading-tight ">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </div>
          <div className=" p-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </div>
          <button
            className="bg-[#49BBBD] text-[#FFFFFF] text-[10px] font-[700] p-[10px] rounded-[10px] mt-[10px] sm:w-[100%] md:w-[25%]"
            type="button"
          >
            Start Learning Now
          </button>
        </div>

        <div className="pt-[40px] w-[100%] lg:w-[80%] lg:m-auto">
          <img src="./images/Group 40 (1).svg" style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default Card1;
