"use client";

import Image from "next/image";
import React from "react";
import heroimg from "../../../public/images/hero.png";
import reveal from "../../../public/images/reveal.png";
import { useState, useEffect } from "react";
import Select from "./RadioGroup";
import noneblack from "../../../public/images/noneblack.jpg";
import noneblue from "../../../public/images/noneblue.jpg";
import nonepurple from "../../../public/images/nonepurple.jpg";
import hoodieblack from "../../../public/images/hoodieblack.jpg";
import hoodieblue from "../../../public/images/hoodieblue.jpg";
import hoodiepurple from "../../../public/images/hoodiepurple.jpg";
import animalblack from "../../../public/images/animalblack.jpg";
import animalblue from "../../../public/images/animalblue.jpg";
import animalpurple from "../../../public/images/animalpurple.jpg";

const QuizSection = () => {
  const clothes = [
    {
      name: "None",
    },
    {
      name: "Hoodie",
    },
    {
      name: "Animal",
    },
  ];

  const background = [
    {
      name: "Black",
      color: "black",
    },
    {
      name: "Blue",
      color: "blue-400",
    },
    {
      name: "Purple",
      color: "purp",
    },
  ];
  const [clothing, setClothing] = useState(clothes[0]);
  const [bg, setBg] = useState(background[0]);
  const [video1Open, setVideo1Open] = useState(false);
  const [img, setImg] = useState(noneblack);

  useEffect(() => {
    if (clothing.name === "None" && bg.name === "Black") {
      setImg(noneblack);
    } else if (clothing.name === "None" && bg.name === "Blue") {
      setImg(noneblue);
    } else if (clothing.name === "None" && bg.name === "Purple") {
      setImg(nonepurple);
    } else if (clothing.name === "Hoodie" && bg.name === "Black") {
      setImg(hoodieblack);
    } else if (clothing.name === "Hoodie" && bg.name === "Blue") {
      setImg(hoodieblue);
    } else if (clothing.name === "Hoodie" && bg.name === "Purple") {
      setImg(hoodiepurple);
    } else if (clothing.name === "Animal" && bg.name === "Black") {
      setImg(animalblack);
    } else if (clothing.name === "Animal" && bg.name === "Blue") {
      setImg(animalblue);
    } else if (clothing.name === "Animal" && bg.name === "Purple") {
      setImg(animalpurple);
    }
  }, [clothing.name, bg.name]);

  const reset = () => {
    setVideo1Open(false);
    console.log(bg.color);

    setBg(background[0]);
  };

  return (
    <div className="flex  2xl:px-48   relative items-center justify-center flex-col xl:flex-row">
      <div className="w-full mt-24 px-12">
        <h1 className="text-4xl text-center xl:text-left xl:text-5xl font-bold mb-12">
          TAKE THE <br></br> <span className="text-purp">BEAST QUIZ</span>
        </h1>
        <div className="flex justify-center xl:justify-start  gap-x-6 text-xl font-semibold">
          <div className=" ">
            <select
              className="px-4 text-#[#3C3C3C] py-2 border-2 border-purp rounded-md focus:scale-105 transition outline-none"
              disabled={video1Open}
              onChange={(val) => setClothing(clothes[val.target.value])}
              name="clothing"
              id="clothing"
            >
              <option onClick={() => setClothing(clothing[0])} value={0}>
                None
              </option>
              <option onClick={() => setClothing(clothing[1])} value={1}>
                Hoodie
              </option>
              <option onClick={() => setClothing(clothing[2])} value={2}>
                Animal
              </option>
            </select>
          </div>
          <div>
            <select
              className="px-4 py-2 border-2 border-purp rounded-md focus:scale-105 transition outline-none"
              disabled={video1Open}
              onChange={(val) => setBg(background[val.target.value])}
              name="clothing"
              id="clothing"
            >
              <option onClick={() => setClothing(clothing[0])} value={0}>
                Black
              </option>
              <option onClick={() => setClothing(clothing[1])} value={1}>
                Blue
              </option>
              <option onClick={() => setClothing(clothing[2])} value={2}>
                Purple
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row mt-12 gap-x-8 gap-y-6">
          <button
            disabled={video1Open}
            onClick={() => setVideo1Open(true)}
            className="mintbutton hover:scale-105 active:scale-105 transition  text-xl lg:text-2xl text-white px-4 py-3 rounded-md"
          >
            SEE YOUR BEAST
          </button>
          <button
            disabled={!video1Open}
            onClick={() => reset()}
            className=" bg-[#3C3C3C] disabled:hover:scale-100 disabled:active:scale-100 disabled:cursor-not-allowed px-4 hover:scale-105 active:scale-110 transition py-3 rounded-md"
          >
            {" "}
            <p className="textgradient text-xl  lg:text-2xl ">RESET</p>{" "}
          </button>
        </div>
      </div>
      <div className={`w-full px-8 md:px-12 lg:px-24 xl:px-6 xl:pt-12  h-full  mt-16 xl:mt-0 `}>
        <div
          className={`group  relative flex 
            w-full
            flex-col   `}
        >
          <Image
            alt="reveal"
            className={`z-10  bg-${
              bg.color
            } bg-white  rounded-lg w-full  duration-300  
                 ${video1Open ? `opacity-0` : `opacity-100`}
                 transition`}
            src={reveal}
          />
          <div className="absolute h-full w-full"></div>

          <Image
            alt={`Beast with clothes of: ${clothing.name} and border of ${bg.name}`}
            src={img}
            className={`absolute  w-full    rounded-lg `}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
