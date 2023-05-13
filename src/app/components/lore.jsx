import Image from "next/image";
import React from "react";
import lineup from "../../../public/images/lineup.png";
import Link from "next/link";

const Lore = () => {
  return (
    <div className="flex  2xl:px-48   relative items-center justify-center flex-col xl:flex-row">
      <div className="w-full mt-24 px-12">
        <h1 className="text-4xl xl:text-5xl font-bold mb-12">
          BEAST <br></br> <span className="text-purp">LORE</span>
        </h1>
        <div className="flex flex-col gap-y-6 text-xl font-semibold">
          <p>
            The story of A Kid Called Beast (AKCB) is one that spans the vast
            reaches of space and time, where the origins of these digital assets
            can be traced back to the very creation of the universe itself.
          </p>
          <p>
            It is said that when the universe was formed, it was filled with
            countless random rocks and debris that floated endlessly through the
            emptiness of space. Among these rocks, a special few were imbued
            with a mysterious energy, one that gave them the power to create and
            sustain life
          </p>
          <p>
            These creatures came to be known as &quot;beasts,&quot; and they quickly
            spread throughout the universe, carving out their own territories
            and adapting to the unique challenges of each new world they
            encountered.
          </p>
        </div>
        <div className="mt-12">
          <Link href={'/link'}>
          <button className=" bg-[#3C3C3C] px-4 hover:scale-105 active:scale-110 transition py-3 rounded-md">
            {" "}
            <p className="textgradient text-xl  lg:text-2xl ">
              TAKE THE BEAST QUIZ
            </p>{" "}
          </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full  mt-16 xl:mt-0 ">
        <Image
          src={lineup}
          className=" xl:absolute   xl:w-[55rem]  -bottom-32 "
          alt="two beast nfts standing side by side"
        />
      </div>
    </div>
  );
};

export default Lore;
