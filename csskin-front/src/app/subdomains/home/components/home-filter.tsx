import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
} from "@chakra-ui/react";
import { FaSortAmountDown, FaTag } from "react-icons/fa";
import { useFilter } from "../hooks/use-filter";
import { categories } from "../mock/categories";
import { floatOptions } from "../mock/float";

export const HomeFilter = () => {
  const { setFilters, filters } = useFilter();

  const handleClearFilters = () => {
    setFilters({
      category: null,
      priceMin: null,
      priceMax: null,
      float: null,
    });
  };

  return (
    <form>
      <Grid
        bgGradient="linear(to-r, gray.800, gray.900)"
        p={{ base: 4, md: 6 }}
        boxShadow="dark-lg"
        borderRadius="lg"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        alignItems="center"
        justifyContent="center"
        color="white"
        h={{ base: "auto" }}
      >
        <GridItem colSpan={{ base: 1, md: 1 }} w="100%">
          <FormControl>
            <FormLabel>Categoria</FormLabel>
            <Select
              variant="outline"
              placeholder="Selecione uma categoria"
              size="lg"
              icon={<FaTag />}
              _placeholder={{ color: "gray.400" }}
              focusBorderColor="yellow.400"
              borderColor="gray.600"
              _hover={{ borderColor: "yellow.400" }}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              value={filters.category || ""}
            >
              {categories.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1 }} w="100%">
          <FormControl>
            <FormLabel>Valor Mínimo</FormLabel>
            <Input
              size="lg"
              placeholder="Digite o valor mínimo"
              type="number"
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  priceMin: Number(e.target.value),
                }))
              }
              focusBorderColor="yellow.400"
              borderColor="gray.600"
              _placeholder={{ color: "gray.400" }}
              _hover={{ borderColor: "yellow.400" }}
              value={filters.priceMin || ""}
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1 }} w="100%">
          <FormControl>
            <FormLabel>Valor Máximo</FormLabel>
            <Input
              size="lg"
              placeholder="Digite o valor máximo"
              type="number"
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  priceMax: Number(e.target.value),
                }))
              }
              focusBorderColor="yellow.400"
              borderColor="gray.600"
              _placeholder={{ color: "gray.400" }}
              _hover={{ borderColor: "yellow.400" }}
              value={filters.priceMax || ""}
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1 }} w="100%">
          <FormControl>
            <FormLabel>Ordenar por</FormLabel>
            <Select
              variant="outline"
              placeholder="Ordenar por"
              size="lg"
              icon={<FaSortAmountDown />}
              _placeholder={{ color: "gray.400" }}
              focusBorderColor="yellow.400"
              borderColor="gray.600"
              _hover={{ borderColor: "yellow.400" }}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  float: e.target.value,
                }))
              }
              value={filters.float || ""}
            >
              {floatOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 4 }} w="100%" display="flex" gap={4}>
          <Button
            colorScheme="yellow"
            variant="outline"
            onClick={handleClearFilters}
            w="full"
          >
            Limpar Filtros
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
};
