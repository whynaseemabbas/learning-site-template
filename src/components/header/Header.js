import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const Nav = (
    <>
      <div className="sm:transition duration-700 ease-in-out lg:hidden absolute top-16 pb-[10px] w-full left-0 right-0 bg-[#ffffff]">
        <div className="lg:flex md:flex md:flex-col md:items-center ">
          <div className="text-center hover:text-black md:w-full cursor-pointer border border-black border-indigo-100 p-[10px] mb-[15px] hover:bg-sky-50">
            Home
          </div>
          <div className="text-center hover:text-black md:w-full cursor-pointer border border-black border-indigo-100 p-[10px] mb-[15px] hover:bg-sky-50">
            Courses
          </div>
          <div className="text-center hover:text-black md:w-full cursor-pointer border border-black border-indigo-100 p-[10px] mb-[15px] hover:bg-sky-50">
            Careers
          </div>
          <div className="text-center hover:text-black md:w-full cursor-pointer border border-black border-indigo-100 p-[10px] mb-[15px] hover:bg-sky-50">
            Blog
          </div>
          <div className="text-center hover:text-black md:w-full cursor-pointer border border-black border-indigo-100 p-[10px] mb-[15px] hover:bg-sky-50">
            About Us
          </div>
        </div>
        <div className="flex items-center  lg:flex md:hidden border border-black border-indigo-100 p-[10px] hover:bg-sky-50 cursor-pointer sm:flex sm:items-center sm:justify-center">
          <div className="bg-[#DFDCDC] w-[30%] sm:w-[10%] rounded-[68px]">
            <img
              className=""
              src="./images/headerImg.svg "
              style={{ width: "100%" }}
            />
          </div>
          <div className="flex items-center hover:text-black">
            <div className="pl-[10px] pr-[5px] ">Lina</div>
            <div>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02734 7.66016C6.34375 7.97656 6.87109 7.97656 7.1875 7.66016L11.9688 2.87891C12.3203 2.52734 12.3203 2 11.9688 1.68359L11.1953 0.875C10.8438 0.558594 10.3164 0.558594 10 0.875L6.58984 4.28516L3.21484 0.875C2.89844 0.558594 2.37109 0.558594 2.01953 0.875L1.24609 1.68359C0.894531 2 0.894531 2.52734 1.24609 2.87891L6.02734 7.66016Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-[#ffffff]">
      <div className="flex justify-between items-center w-[90%] p-[15px] mx-auto  sm:w-[90%] sm:mx-auto">
        <div className="md:w-[40%] md:ml-auto sm:relative left-[-20px] md:ml-auto">
          <svg
            width="90"
            height="40"
            viewBox="0 0 114 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.9645 4.94975C39.9171 2.99713 43.0829 2.99713 45.0355 4.94975L78.0502 37.9645C80.0029 39.9171 80.0029 43.0829 78.0503 45.0355L45.0355 78.0502C43.0829 80.0029 39.9171 80.0029 37.9645 78.0503L4.94975 45.0355C2.99713 43.0829 2.99713 39.9171 4.94975 37.9645L37.9645 4.94975Z"
              stroke="#00FFF0"
              stroke-width="2"
            />
            <path
              d="M40.144 29.536V33.92H34.192V52H28.72V33.92H22.768V29.536H40.144ZM54.7943 52.224C52.6823 52.224 50.7409 51.7333 48.9703 50.752C47.2209 49.7707 45.8236 48.4053 44.7783 46.656C43.7543 44.8853 43.2423 42.9013 43.2423 40.704C43.2423 38.5067 43.7543 36.5333 44.7783 34.784C45.8236 33.0347 47.2209 31.6693 48.9703 30.688C50.7409 29.7067 52.6823 29.216 54.7943 29.216C56.9063 29.216 58.8369 29.7067 60.5863 30.688C62.3569 31.6693 63.7436 33.0347 64.7463 34.784C65.7703 36.5333 66.2823 38.5067 66.2823 40.704C66.2823 42.9013 65.7703 44.8853 64.7463 46.656C63.7223 48.4053 62.3356 49.7707 60.5863 50.752C58.8369 51.7333 56.9063 52.224 54.7943 52.224ZM54.7943 47.232C56.5863 47.232 58.0156 46.6347 59.0823 45.44C60.1703 44.2453 60.7143 42.6667 60.7143 40.704C60.7143 38.72 60.1703 37.1413 59.0823 35.968C58.0156 34.7733 56.5863 34.176 54.7943 34.176C52.9809 34.176 51.5303 34.7627 50.4423 35.936C49.3756 37.1093 48.8423 38.6987 48.8423 40.704C48.8423 42.688 49.3756 44.2773 50.4423 45.472C51.5303 46.6453 52.9809 47.232 54.7943 47.232ZM86.7665 29.536V33.92H80.8145V52H75.3425V33.92H69.3905V29.536H86.7665ZM89.8647 40.736C89.8647 38.5173 90.3447 36.544 91.3047 34.816C92.2647 33.0667 93.5981 31.712 95.3047 30.752C97.0327 29.7707 98.9847 29.28 101.161 29.28C103.827 29.28 106.11 29.984 108.009 31.392C109.907 32.8 111.177 34.72 111.817 37.152H105.801C105.353 36.2133 104.713 35.4987 103.881 35.008C103.07 34.5173 102.142 34.272 101.097 34.272C99.4114 34.272 98.0461 34.8587 97.0007 36.032C95.9554 37.2053 95.4327 38.7733 95.4327 40.736C95.4327 42.6987 95.9554 44.2667 97.0007 45.44C98.0461 46.6133 99.4114 47.2 101.097 47.2C102.142 47.2 103.07 46.9547 103.881 46.464C104.713 45.9733 105.353 45.2587 105.801 44.32H111.817C111.177 46.752 109.907 48.672 108.009 50.08C106.11 51.4667 103.827 52.16 101.161 52.16C98.9847 52.16 97.0327 51.68 95.3047 50.72C93.5981 49.7387 92.2647 48.384 91.3047 46.656C90.3447 44.928 89.8647 42.9547 89.8647 40.736Z"
              fill="#5B5B5B"
            />
          </svg>
        </div>

        <div className="flex items-center text-[#5B5B5B] text-[22px] font-[400]">
          <div className=" flex sm:hidden lg:flex">
            <div className="pr-[45px] cursor-pointer hover:text-black">
              Home
            </div>
            <div className="pr-[45px] cursor-pointer hover:text-black">
              Courses
            </div>
            <div className="pr-[45px] cursor-pointer hover:text-black">
              Careers
            </div>
            <div className="pr-[45px] cursor-pointer hover:text-black">
              Blog
            </div>
            <div className="pr-[45px] cursor-pointer hover:text-black">
              About Us
            </div>
          </div>
          <div className="flex items-center sm:hidden lg:flex md:flex md:items-center">
            <div className="bg-[#DFDCDC] w-[30%] rounded-[68px]">
              <img
                className=""
                src="./images/headerImg.svg "
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex items-center">
              <div className="pl-[10px] pr-[5px] text-black">Lina</div>
              <div className="cursor-pointer">
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.02734 7.66016C6.34375 7.97656 6.87109 7.97656 7.1875 7.66016L11.9688 2.87891C12.3203 2.52734 12.3203 2 11.9688 1.68359L11.1953 0.875C10.8438 0.558594 10.3164 0.558594 10 0.875L6.58984 4.28516L3.21484 0.875C2.89844 0.558594 2.37109 0.558594 2.01953 0.875L1.24609 1.68359C0.894531 2 0.894531 2.52734 1.24609 2.87891L6.02734 7.66016Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>{isOpen && Nav}</div>

          <button
            className="block lg:hidden md:absolute left-10 "
            onClick={handleClick}
          >
            {isOpen ? <FaTimes /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
