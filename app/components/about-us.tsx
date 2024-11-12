"use client"; // Ensures this component runs on the client side

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  // Set up the intersection observer for the text section
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <div className="relative w-full h-[350px]">
      {/* Background Image */}
      <Image
        src="/homepage/2/FLUX.jpg"
        alt="About Us Background"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        quality={100}
        style={{ objectFit: "cover" }}
        className="-z-10 opacity-40"
      />

      {/* Text Content with Animation */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center items-center space-y-4 h-full"
      >
        <p className="font-semibold text-4xl">About Us</p>
        <p className="mb-8 max-w-xl text-base leading-relaxed">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
