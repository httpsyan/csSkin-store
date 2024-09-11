"use client";

import Image from "next/image";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
}

const Hero = ({ image = "", children }: HeroProps) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-80" />
      <Image
        src={image}
        alt={""}
        width={1920}
        height={1080}
        quality={100}
        className="h-[70vh] w-full object-cover xl:h-[78vh]"
      />
      {children}
    </section>
  );
};

export default Hero;
