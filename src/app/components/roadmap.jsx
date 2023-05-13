"use client";
import Image from "next/image";
import React, { createRef, useState, useEffect } from "react";
import heroimg from "../../../public/images/hero.png";

const Roadmap = () => {
  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setVisible1(entry?.isIntersecting);
    });
    observer.observe(ref1.current);
  }, [ref1]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setVisible2(entry?.isIntersecting);
    });
    observer.observe(ref2.current);
  }, [ref2]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setVisible3(entry?.isIntersecting);
    });
    observer.observe(ref3.current);
  }, [ref3]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setVisible4(entry?.isIntersecting);
    });
    observer.observe(ref4.current);
  }, [ref4]);

  return (
    <div className="flex overflow-hidden  xl:px-48   relative items-center justify-center flex-row">
      <div className="xl:flex hidden fixed top-48 flex-col gap-y-12 left-24 w-24   ">
        <div className={`h-24 w-3 ${visible1 ? `bg-purp` : `bg-white`}`}></div>
        <div className={`h-24 w-3 ${visible2 ? `bg-purp` : `bg-white`}`}></div>
        <div className={`h-24 w-3 ${visible3 ? `bg-purp` : `bg-white`}`}></div>
        <div className={`h-24 w-3 ${visible4 ? `bg-purp` : `bg-white`}`}></div>
      </div>
      <div className="flex flex-col gap-y-[17rem] pb-24">
        <div className="flex  2xl:px-  relative items-center justify-center flex-col xl:flex-row">
          <div className="w-full mt-24 px-12">
            <h1 className="text-4xl xl:text-5xl font-bold mb-12">
              PHASE 1 <br></br> <span className="text-purp">Community</span>
            </h1>
            <div className="flex flex-col gap-y-6 text-xl font-semibold">
              <p>
                The story of A Kid Called Beast (AKCB) is one that spans the
                vast reaches of space and time, where the origins of these
                digital assets can be traced back to the very creation of the
                universe itself.
              </p>
              <p>
                It is said that when the universe was formed, it was filled with
                countless random rocks and debris that floated endlessly through
                the emptiness of space. Among these rocks, a special few were
                imbued with a mysterious energy, one that gave them the power to
                create and sustain life
              </p>
              <p>
                These creatures came to be known as &quot;beasts,&quot; and they
                quickly spread throughout the universe, carving out their own
                territories and adapting to the unique challenges of each new
                world they encountered.
              </p>
            </div>
            
          </div>
          <div ref={ref1} className="w-full px-8 md:px-12 lg:px-24 xl:px-6 pt-12  h-full   xl:pt-0  ">
            <Image
              src={heroimg}
              className=" xl:absolute   xl:w-[55rem]  -bottom-32 "
              alt="two beast nfts standing side by side"
            />
          </div>
        </div>

        <div className="flex  2xl:px-  relative items-center justify-center flex-col xl:flex-row">
          <div className="w-full mt-24 px-12">
            <h1 className="text-4xl xl:text-5xl font-bold mb-12">
              PHASE 2 <br></br> <span className="text-purp">Launch</span>
            </h1>
            <div className="flex flex-col gap-y-6 text-xl font-semibold">
              <p>
                The story of A Kid Called Beast (AKCB) is one that spans the
                vast reaches of space and time, where the origins of these
                digital assets can be traced back to the very creation of the
                universe itself.
              </p>
              <p>
                It is said that when the universe was formed, it was filled with
                countless random rocks and debris that floated endlessly through
                the emptiness of space. Among these rocks, a special few were
                imbued with a mysterious energy, one that gave them the power to
                create and sustain life
              </p>
              <p>
                These creatures came to be known as &quot;beasts,&quot; and they
                quickly spread throughout the universe, carving out their own
                territories and adapting to the unique challenges of each new
                world they encountered.
              </p>
            </div>
            <div className="mt-12">
              
            </div>
          </div>
          <div ref={ref2} className="w-full px-8 md:px-12 lg:px-24 xl:px-6 pt-12  h-full   xl:pt-0 ">
            <Image
              src={heroimg}
              className=" xl:absolute   xl:w-[55rem]  -bottom-32 "
              alt="two beast nfts standing side by side"
            />
          </div>
        </div>

        <div className="flex  2xl:px-  relative items-center justify-center flex-col xl:flex-row">
          <div className="w-full mt-24 px-12">
            <h1 className="text-4xl xl:text-5xl font-bold mb-12">
              PHASE 3 <br></br> <span className="text-purp">Tokenomics</span>
            </h1>
            <div className="flex flex-col gap-y-6 text-xl font-semibold">
              <p>
                The story of A Kid Called Beast (AKCB) is one that spans the
                vast reaches of space and time, where the origins of these
                digital assets can be traced back to the very creation of the
                universe itself.
              </p>
              <p>
                It is said that when the universe was formed, it was filled with
                countless random rocks and debris that floated endlessly through
                the emptiness of space. Among these rocks, a special few were
                imbued with a mysterious energy, one that gave them the power to
                create and sustain life
              </p>
              <p>
                These creatures came to be known as &quot;beasts,&quot; and they
                quickly spread throughout the universe, carving out their own
                territories and adapting to the unique challenges of each new
                world they encountered.
              </p>
            </div>
            <div className="mt-12">
              
            </div>
          </div>
          <div ref={ref3} className="w-full px-8 md:px-12 lg:px-24 xl:px-6 pt-12  h-full   xl:pt-0 ">
            <Image
              src={heroimg}
              className=" xl:absolute   xl:w-[55rem]  -bottom-32 "
              alt="two beast nfts standing side by side"
            />
          </div>
        </div>

        <div className="flex  2xl:px-  relative items-center justify-center flex-col xl:flex-row">
          <div className="w-full mt-24 px-12">
            <h1 className="text-4xl xl:text-5xl font-bold mb-12">
              PHASE 4 <br></br> <span className="text-purp">Staking</span>
            </h1>
            <div className="flex flex-col gap-y-6 text-xl font-semibold">
              <p>
                The story of A Kid Called Beast (AKCB) is one that spans the
                vast reaches of space and time, where the origins of these
                digital assets can be traced back to the very creation of the
                universe itself.
              </p>
              <p>
                It is said that when the universe was formed, it was filled with
                countless random rocks and debris that floated endlessly through
                the emptiness of space. Among these rocks, a special few were
                imbued with a mysterious energy, one that gave them the power to
                create and sustain life
              </p>
              <p>
                These creatures came to be known as &quot;beasts,&quot; and they
                quickly spread throughout the universe, carving out their own
                territories and adapting to the unique challenges of each new
                world they encountered.
              </p>
            </div>
            <div className="mt-12">
              
            </div>
          </div>
          <div ref={ref4} className="w-full px-8 md:px-12 lg:px-24 xl:px-6 pt-12  h-full   xl:pt-0 ">
            <Image
              src={heroimg}
              className=" xl:absolute   xl:w-[55rem]  -bottom-32 "
              alt="two beast nfts standing side by side"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
