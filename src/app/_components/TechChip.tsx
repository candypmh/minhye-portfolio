"use client";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function TechChip({label}: {label: string}) {
  return (
     <motion.div
      className="select-none rounded-2xl border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-800 shadow-sm hover:shadow-md"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      variants={fadeUp}
    >
      <span className="inline-flex items-center gap-2">
        {label}
      </span>
    </motion.div>
  );
}

