"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { Calendar } from "./Calendar";
import { Program } from "./Program";
import { useState } from "react";
import { MusicPlayer } from "./music";
import { FaMusic } from "react-icons/fa";
import { anim, txt1, txt2 } from "@/data/data";
import { motion } from "framer-motion";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="text-center overflow-hidden  FontArmenianDecorativeU ">
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#818181d3]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain invert-100"
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className="FontArmAllegroU  tracking-0 h-screen bg-cover bg-top flex flex-col pt-20 p-7 "
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <div className="flex items-center">
          <h2 className="text-9xl">Ա</h2>
          <p className="text-4xl">րման</p>
        </div>
        <div className="flex items-end -mt-10 justify-end">
          <h2 className="text-9xl">Մ</h2>
          <p className="text-4xl mr-5 -ml-8">անե</p>
        </div>
      </div>
      <TimeBox />

      <div className=" p-7 ">
        <div className="py-10 ">
          <motion.h3 {...anim} className=" relative text-[32px]">
            ՍԻՐԵԼԻՆԵՐ
            <p className=" absolute -z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-[#5800001A]">
              ՍԻՐԵԼԻՆԵՐ
            </p>
          </motion.h3>
          <motion.p {...anim} className="  text-xl py-5">
            {txt1}
          </motion.p>

          <Image
            src="/img2.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full h-60 object-cover rounded-xl "
          />
        </div>
      </div>
      <div className=" w-full text-[#580000] ">
        <div className="whitespace-nowrap animate-marquee-2 text-4xl -rotate-2  -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
        <div className="whitespace-nowrap animate-marquee text-4xl mb-10 rotate-2  -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
        <div className="whitespace-nowrap animate-marquee-2 text-4xl mt-15  -rotate-2 -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
        <div className="whitespace-nowrap animate-marquee text-4xl mb-10 rotate-2  -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
        <div className="whitespace-nowrap animate-marquee-2 text-4xl mt-15 -rotate-2 -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
      </div>

      <Image
        src="/img4.jpg"
        alt="icon1"
        width={500}
        height={500}
        className="w-full object-cover my-10 mb-25 "
      />

      <div className="relative">
        <Image
          src="/icon1.png"
          alt="icon1"
          width={500}
          height={500}
          className="-z-1 -top-6 absolute  "
        />
        <div className="relative mb-40 ">
          <Image
            src="/icon4.png"
            alt="icon1"
            width={500}
            height={500}
            className="-top-10 absolute -z-1 w-full "
          />
          <div className=" flex justify-around ml-4 -rotate-7">
            <div className="flex flex-col gap-10">
              <p className="text-sm">Կիրակի</p>
              <p className="text-4xl">12</p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-sm">Երկուշաբթի</p>
              <p className="text-4xl">13</p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-sm">Երեքշաբթի</p>
              <p className="text-4xl">14</p>
            </div>
          </div>
        </div>
        <Program />
      </div>

      <div className="  relative  h-140 mb-15"> 
        <div className=" absolute top-15  bg-[#F4F4F4] w-full h-140 -z-1"></div>
        <Image
          src="/img5.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-75  absolute z-5 h-75 object-cover rounded-xl  left-1/2 -translate-x-1/2  top-[60%] -translate-y-1/2   "
        />
        <p className="FontAkronim text-[300px] tracking-[30%] text-[#580000] ">
          LO
        </p>
        <p  className="FontAkronim text-[300px] tracking-[30%] text-[#580000] -mt-45 ">
          VE
        </p>
      </div>

      <motion.p {...anim} className=" relative  px-7 py-20 text-xl text-center">
        {txt2}

        <span className="FontArmAllegroU w-[200%] leading-20  absolute -z-1 text-5xl top-0 left-1/2 -translate-x-1/2 text-[#5800000D]">
          Մասնակցության մասին Խնդրում ենք Տեղեկացնել մինչև <br /> Ապրիլի 10-ը
        </span>
      </motion.p>


    </div>
  );
}
