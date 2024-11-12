import { Button } from "@/components/enchance-button";
import Image from "next/image";
import React from "react";

const ExtraCollection = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/homepage/1/BLOOM.jpg"
        alt="About Us Background"
        fill
        quality={100}
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="-z-10"
      />
      <div className="relative z-10 flex flex-col justify-end items-center space-y-4 h-full">
        <Button
          variant="gooeyLeft"
          className="mb-14 px-6 py-2 rounded font-semibold"
        >
          COLLECTION NAME
        </Button>
      </div>
    </div>
  );
};

export default ExtraCollection;
