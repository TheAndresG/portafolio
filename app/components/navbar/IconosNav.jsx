"use client";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon } from "./icons";

export default function IconosNav() {
  return (
    <nav className="flex items-center justify-center flex-wrap">
      <motion.a
        href="https://github.com/theandresg"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mr-3"
      >
        <GithubIcon />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/andres-gomez-guardamagna/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 ml-3"
      >
        <LinkedInIcon />
      </motion.a>
    </nav>
  );
}
