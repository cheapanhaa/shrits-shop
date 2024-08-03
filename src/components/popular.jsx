"use client";
import { useState } from "react";
import Image from "next/image";
export default function Popular() {
  const [selected, setSelected] = useState(null);

  const handleClick = (category) => {
    setSelected(category);
  };
  return (
    <>
      <div className="flex justify-center mt-5 gap-10">
        <button className="hover:bg-blue-700 text-blue-800 hover:text-white text-xs py-1 px-3 rounded-lg border border-blue-800">
          Shop All <br />
          Products
        </button>
        <div className="flex flex-col items-center">
          <Image
            src="/popular/image.png"
            width={50}
            height={30}
            alt="Sports category"
          />
          <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
            T-Shrit
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/popular/hoodie.png"
            width={50}
            height={30}
            alt="Sports category"
          />
          <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
            Hoodie
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/popular/cap.png"
            width={50}
            height={30}
            alt="Sports category"
          />
          <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
            Hats
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/popular/shirt.png"
            width={50}
            height={30}
            alt="Sports category"
          />
          <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
            Tank Tops
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/popular/face.png"
            width={50}
            height={30}
            alt="Sports category"
          />
          <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
            Sticker
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/popular/tshirt.png"
            width={50}
            height={30}
            alt="Sports category"
          />
          <h1 className="text-xs font-bold text-center mt-2 text-blue-800">
            T-Shirt Kid
          </h1>
        </div>
      </div>
    </>
  );
}
