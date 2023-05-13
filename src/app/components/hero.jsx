import Image from "next/image";
import React from "react";
import heroimg from "../../../public/images/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex  2xl:px-48    relative items-center justify-center flex-col xl:flex-row">
      <div className="w-full mt-24 px-12">
        <h1 className="text-4xl xl:text-5xl font-bold mb-12">
          A KID <br></br> <span className="text-purp"> CALLED BEAST</span>
        </h1>
        <div className="flex flex-col gap-y-6 text-xl font-semibold">
          <p>
            Welcome to A Kid Called Beast (AKCB), an NFT collection of 10,000
            unique digital assets on the Ethereum blockchain. Our visually
            stunning and captivating designs are created by skilled artists from
            around the world, offering a one-of-a-kind digital art experience
            for collectors and art enthusiasts.
          </p>
          <p>
            As an AKCB member, you&apos;ll enjoy exclusive content, early
            releases, and other exciting benefits. With a limited supply of only
            10,000 NFTs, each one is a rare and valuable asset that is sure to
            appreciate in value over time.
          </p>
          <p>
            Join the AKCB community and own a piece of digital art history
            today!
          </p>
        </div>
        <div className="flex flex-col xl:flex-row mt-12 gap-x-8 gap-y-6">
          <button className="mintbutton cursor-not-allowed text-xl lg:text-2xl text-white px-4 py-3 rounded-md">
            MINTING SOON
          </button>
          <Link href={'/quiz'} className=" bg-[#3C3C3C] px-4 hover:scale-105 active:scale-110 transition py-3 rounded-md">
            {" "}
            <p className="textgradient text-xl  lg:text-2xl whitespace-nowrap ">TAKE THE BEAST QUIZ</p>{" "}
          </Link>
        </div>
      </div>
      <div className="w-full h-full  mt-16 xl:mt-0 ">
        <Image
          src={heroimg}
          className=" xl:absolute   xl:w-[55rem]  -bottom-32 "
          alt="two beast nfts standing side by side"
        />
      </div>
    </div>
  );
};

export default Hero;
