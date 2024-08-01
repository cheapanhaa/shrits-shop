"use client";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [selected, setSelected] = useState(null);

  const handleClick = (category) => {
    setSelected(category);
  };
  return (
    <>
      <div className="flex p-2 justify-between items-center border-gray-300 flex-wrap bg-slate-100">
        <div className="flex items-center">
          <Image src="/logo.png" width={80} height={80} alt="Logo" />
          <h2 className="font-bold text-2xl text-blue-900">You N Me</h2>
        </div>
        <div className="relative flex items-center hidden md:inline-flex">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-200 rounded-md py-1 px-2 w-80"
          />
          <svg
            className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-5 ">
          <Image src={"/user.png"} width={30} height={30} alt="cart" />
          <Image src={"/cart.png"} width={30} height={30} alt="cart" />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Create Account
          </button>
        </div>
      </div>
      <div className=" bg-slate-100 h-40">
        <div className="flex justify-center gap-10">
          <h1
            className={`relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-800 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${
              selected === "category"
                ? "after:scale-x-100"
                : "hover:after:scale-x-100"
            }`}
            onClick={() => handleClick("category")}
          >
            Explore Category
          </h1>
          <h1
            className={`relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-800 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${
              selected === "products"
                ? "after:scale-x-100"
                : "hover:after:scale-x-100"
            }`}
            onClick={() => handleClick("products")}
          >
            Popular Products
          </h1>
        </div>
        <div className="flex justify-center mt-5 gap-10">
          <button className="hover:bg-blue-700 text-blue-800 hover:text-white text-xs py-1 px-3 rounded-lg border border-blue-800">
            Shop all <br />
            Design
          </button>
          <div className="flex flex-col items-center">
            <Image
              src="/category/sports.png"
              width={50}
              height={30}
              alt="Sports category"
            />
            <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
              Sport
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/category/laugh.png"
              width={50}
              height={30}
              alt="Sports category"
            />
            <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
              Funny
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/category/image.png"
              width={50}
              height={30}
              alt="Sports category"
            />
            <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
              Music
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/category/video.png"
              width={50}
              height={30}
              alt="Sports category"
            />
            <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
              Movie
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/category/tv.png"
              width={50}
              height={30}
              alt="Sports category"
            />
            <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
              Television
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/category/robot.png"
              width={50}
              height={30}
              alt="Sports category"
            />
            <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
              Vigtage
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
