"use client";

import { parseAsFloat, parseAsString, useQueryStates } from "nuqs";

export interface filtersProps {
  category: string;
  priceMin: number;
  priceMax: number;
  name: string;
  float: string;
}

export const useFilter = () => {
  const [filters, setFilters] = useQueryStates(
    {
      category: parseAsString,
      priceMin: parseAsFloat,
      priceMax: parseAsFloat,
      name: parseAsString,
      float: parseAsString,
    },
    {
      clearOnDefault: true,
    }
  );

  return { filters, setFilters };
};
