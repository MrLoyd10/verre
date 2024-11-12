"use client";
import { Button } from "@/components/enchance-button";
import { motion } from "framer-motion";
import React from "react";

const CenteredContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly below
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth fade-in and slide-up
      className="flex flex-col flex-grow justify-end items-start px-12 pb-20 text-black"
    >
      <h2 className="mb-4 font-semibold text-4xl">FOLLI</h2>
      <p className="mb-8 max-w-xl text-base leading-relaxed">
        The leaf signifies transition, the pinnacle of metamorphosis. Light to
        shade, warmth to nutrition, the precursor of seasonal change and the
        personification of nostalgia and hope. It was inspired to celebrate the
        poetry of these moments by creating a sculpture with lovely form and
        ethereal light.
      </p>
      <Button variant="gooeyLeft" className="px-6 py-2 rounded font-semibold">
        LEARN MORE →
      </Button>
    </motion.div>
  );
};

export default CenteredContent;
