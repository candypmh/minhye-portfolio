"use client";
import { motion } from "framer-motion";
import { sectionVariants } from "../lib/animations";

export default function RevealSection({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-5xl px-5 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {title ? (
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>
      ) : null}
      {children}
    </motion.section>
  );
}
