import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#252641]  sm:mt-[2051px] lg:mt-[0px] md:mt-[500px] lg:mt-[0px]">
      <div className="flex-col justify-center items-center w-[50%] mx-auto">
        <div className="flex justify-center items-center pt-[50px]">
          <img src="./images/footerLogo.svg" width="80px" />
          <div className="px-[20px]">
            <svg
              width="1"
              height="63"
              viewBox="0 0 1 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.18557e-08"
                x2="0.500004"
                y2="83"
                stroke="#626381"
              />
            </svg>
          </div>
          <div className="text-[22px] font-[600] text-[#ffffff] ">
            Virtual Class for Zoom
          </div>
        </div>
        <div className="flex justify-center text-[26px] font-[500] text-[#B2B3CF] pt-[60px]">
          <div>Subscribe to get our Newsletter</div>
        </div>
        <div className="flex justify-center items-center pt-[15px]">
          <input
            className=" placeholder:text-[#83839A] pl-[15px] bg-[#252641] border border-[#B2B3CF] rounded-[80px] px-[60px] py-[5px] mr-[15px]"
            type="text"
            placeholder="Your Email"
          ></input>
          <button
            className="bg-[#49BBBD] px-[30px] py-[8px] rounded-[60px] text-[12px] font-[500] text-[#ffffff] "
            type="button"
          >
            Subscribe
          </button>
        </div>
        <div className="flex justify-center items-center pt-[80px]">
          <div className="text-[20px] font-[400] text-[#B2B3CF] pr-[16px] pl-[16px]">
            Careers
          </div>
          <div>
            <svg
              width="1"
              height="17"
              viewBox="0 0 1 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.18557e-08"
                x2="0.500001"
                y2="17"
                stroke="#626381"
              />
            </svg>
          </div>
          <div className="text-[20px] font-[400] text-[#B2B3CF] pr-[16px] pl-[16px]">
            Privacy Policy
          </div>
          <div>
            <svg
              width="1"
              height="17"
              viewBox="0 0 1 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.18557e-08"
                x2="0.500001"
                y2="17"
                stroke="#626381"
              />
            </svg>
          </div>
          <div className="text-[20px] font-[400] text-[#B2B3CF]  pr-[16px] pl-[16px]">
            Terms & Conditions
          </div>
        </div>
        <div className=" flex justify-center text-[18px] font-[400] text-[#B2B3CF] pt-[15px]">
          © 2021 Class Technologies Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
