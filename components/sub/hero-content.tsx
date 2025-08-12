"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROFESSIONAL_PROFILES } from "@/constants";

import { fadeIn, staggerContainer } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={fadeIn("down", "tween", 0.5, 0.5)}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[20px] font-semibold">
            Ashiqru Rahman Fahim
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I put{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
              Codes
            </span>{" "}
            in the machine 👨‍💻🐈‍⬛
          </span>
        </motion.div>

        <motion.p
          variants={fadeIn("left", "tween", 0.8, 0.5)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          A dedicated computer science and engineering professional with a solid
          background in Back-end development, AI, and blockchain technology.
          With a comprehensive understanding of software design, development,
          and testing, I have successfully contributed to creating various
          efficient and scalable mobile and web applications. My passion lies in
          building and collaborating on innovative projects, and I am
          particularly enthusiastic about Back-end, AI, DevOps, and blockchain
          practices.
        </motion.p>
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          {PROFESSIONAL_PROFILES.map((link, index) => (
            <motion.a
              variants={fadeIn("left", "tween", 0.8 + index * 0.2, 0.3)}
              key={link.profile_name}
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center p-2.5 m-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              <link.icon className="h-6 w-6 mr-2" />
              <span>{link.profile_name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        variants={fadeIn("right", "tween", 0.8, 0.5)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-[650px] h-[650px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
};
