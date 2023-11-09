import { useRef } from "react";
import LiIcon from "./LiIcon.jsx";
import { motion } from "framer-motion";

export default function Details({ type, time, place, info }) {
  const ref = useRef(null);
  return (
    <li>
      <LiIcon refences={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
}
