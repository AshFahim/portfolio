"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
interface Props {
  src: string;
  title: string;
  description: string;
  demoLink: string;
  sourceLink: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  demoLink,
  sourceLink,
}: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center  w-full z-[20] rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 justify-center">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex space-x-4">
          <motion.a
            variants={slideInFromLeft(1)}
            className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Demo
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1.2)}
            initial="hidden"
            animate="visible"
            href={sourceLink}
            target="_blank"
            className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            &nbsp;Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
