"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

type CollectionItemProps = {
  title: string;
  image: string;
  hoverImage: string;
};

const CollectionItem: React.FC<CollectionItemProps> = ({
  title,
  image,
  hoverImage,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="relative w-50 h-full overflow-hidden group">
      {/* Default Image */}
      <Image
        src={image}
        alt={`${title} Collection`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        quality={100}
        style={{ objectFit: "cover" }}
        className="group-hover:opacity-0 transition-opacity duration-300"
      />
      {/* Hover Image */}
      <Image
        src={hoverImage}
        alt={`${title} Collection Hover`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        quality={100}
        style={{ objectFit: "cover" }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      {/* Black Overlay */}
      <div className="z-10 absolute inset-0 bg-black opacity-30"></div>

      {/* Text Content with Animation */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex flex-col p-7 h-full text-white"
      >
        <p className="font-semibold text-2xl">{title}</p>
        <p className="max-w-xl text-base leading-relaxed">COLLECTION</p>
      </motion.div>
    </div>
  );
};

const Collections = () => {
  const collectionItems = [
    {
      title: "BLOOM",
      image: "/homepage/3/BLOOM 2.jpg",
      hoverImage: "/homepage/3/CRYSTALLINE 1.jpg",
    },
    {
      title: "FLUX",
      image: "/homepage/3/FLUX 1.jpg",
      hoverImage: "/homepage/3/FLUX 2.jpg",
    },
    {
      title: "FOLLI",
      image: "/homepage/3/FOLLI 1.jpg",
      hoverImage: "/homepage/3/FOLLI 2.jpg",
    },
    {
      title: "CRYSTALLINE",
      image: "/homepage/3/CRYSTALLINE 1.jpg",
      hoverImage: "/homepage/3/CRYSTALLINE 2.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-4 w-full h-[600px]">
      {collectionItems.map((item, index) => (
        <CollectionItem
          key={index}
          title={item.title}
          image={item.image}
          hoverImage={item.hoverImage}
        />
      ))}
    </div>
  );
};

export default Collections;
