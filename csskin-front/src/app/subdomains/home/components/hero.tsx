"use client";

import { containerVariants } from "@/app/shared/animation/container";
import heroImage from "@/app/shared/assets/hero.jpg";
import Hero from "@/app/shared/components/hero";
import { Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { useFilter } from "../hooks/use-filter";
import { HomeFilter } from "./home-filter";

const HeroHome = () => {
  const { setFilters, filters } = useFilter();

  return (
    <Hero image={heroImage.src}>
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-10 px-5 xl:px-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-balance text-4xl font-semibold leading-10 text-white md:text-center xl:w-1/2">
          Encontre as skins perfeitas para o seu CS:GO. Aumente seu estilo e
          destaque-se no jogo.
        </h1>

        <Input
          size="lg"
          maxWidth={{
            base: "100%",
            md: "34.625rem",
          }}
          focusBorderColor="yellow.400"
          onChange={(e) => setFilters({ name: e.target.value })}
          value={filters.name || undefined}
          placeholder="Busque pela sua skin ideal..."
          color="white"
        />

        <Suspense fallback={<div className="sr-only">Loading...</div>}>
          <div className="absolute -bottom-40 lg:-bottom-28 z-10 w-full px-5 lg:px-36">
            <HomeFilter />
          </div>
        </Suspense>
      </motion.div>
    </Hero>
  );
};

export default HeroHome;
