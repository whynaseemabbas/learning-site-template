import React from "react";

const Card2 = () => {
  return (
    <div className="Card2 lg:mt-[0px] ">
      <div className="text-[20px] font-[700] text-[#000000] mb-[20px] ml-[80px] sm:text-center lg:text-start md:text-start">
        Reading blog list
      </div>
      <div className="flex justify-between  items-center w-[90%] mx-auto sm:flex sm:flex-col md:flex md:flex-row md:gap-10 md:flex md:flex-col sm:flex sm:flex-col sm:items-center sm:w-100 sm:gap-5 lg:flex-row">
        <div className="flex sm:flex sm:flex-col sm:w-[100%] sm:gap-10 sm:mb-[20px] md:flex-row md:gap-10">
          <div className="w-[100%] ">
            <img src="./images/Group 249 (1).svg" style={{ width: "100%" }} />
          </div>
          <div className="w-[100%]  ">
            <img src="./images/Rectangle 34.svg" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="flex sm:flex sm:flex-col sm:w-[100%] sm:gap-10 md:flex-row md:gap-10">
          <div className="w-[100%]  ">
            <img src="./images/Group 43.svg" style={{ width: "100%" }} />
          </div>
          <div className="w-[100%]  ">
            <img
              src="./images/Rectangle 34 (1).svg"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
