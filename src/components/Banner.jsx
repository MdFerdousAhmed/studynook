"use client"

import { Button } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

export default function Banner() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-80 bg-gray-50 overflow-hidden rounded-sm font-sans gap-8">

      {/* Left Content */}
      <div className="flex flex-col justify-center items-center xl:items-start space-y-2">

        {/* Eyebrow */}
        <p className="m-0 text-xs font-bold tracking-widest uppercase text-emerald-700">
          Quiet Spaces, Big Ideas
        </p>

        {/* Headline */}
        <div className="leading-tight space-y-2">
          <h1 className="m-0 text-4xl font-extrabold text-gray-900 tracking-tight ">
            Find Your Perfect <br /> <span className="text-emerald-700 tracking-tight">Study Room</span>
          </h1>
          {/* Underline accent */}
          <div className="mt-2.5 w-44 h-0.5 bg-linear-to-r from-emerald-700 to-transparent rounded-full" />
        </div>

        {/* Description */}
        <p className="m-0 text-sm text-gray-500 leading-relaxed max-w-xs">
          Browse and book quiet, private study rooms in your library. List your own room and earn.
        </p>

        {/* CTA Button */}
        <div className="flex gap-2 mt-2">
          <Button className='rounded-lg  flex justify-center items-center'>Explore Rooms <FaArrowRightLong /></Button>
          <Button className='rounded-lg' variant="outline">Get Started</Button>
        </div>
        <div className="flex gap-6 justify-center items-center text-center">
          <div>
            <h1 className="text-xl font-bold">120+</h1>
            <p className="text-black/60">Rooms Listed</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">8k</h1>
            <p className="text-black/60">Hours Booked</p>
          </div>
          <div>
            <h1 className="flex text-xl font-bold justify-center items-center">4.9<span><IoIosStar /></span></h1>
            <p className="text-black/60">Avg. Rating</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center">

        <Image
          src="/library.jpg"
          width={800}
          height={800}
          alt="Picture of the author"
          className="h-full w-full"
        />


      </div>
    </div>
  );
}