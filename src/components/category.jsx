"use client";
import Image from "next/image";
import { useState } from "react";
export default function Category() {
  const [selected, setSelected] = useState(null);

  const handleClick = (category) => {
    setSelected(category);
  };
  return (
    <>
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
    </>
  );
}
