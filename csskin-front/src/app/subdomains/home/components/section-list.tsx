"use client";

import { containerVariants } from "@/app/shared/animation/container";
import LoadingOrError from "@/app/shared/components/LoadingOrError";
import { formatPrice } from "@/app/shared/utils/format-price";
import { getFloatColor } from "@/app/shared/utils/get-float";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Progress,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useFilter } from "../hooks/use-filter";
import useGetItems from "../service/get-all-items";

const SectionList = () => {
  const { filters } = useFilter();
  const { data, isLoading, isError } = useGetItems(filters);

  return (
    <motion.section
      className="mx-5 lg:mx-36 py-56"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {isLoading ? (
        <LoadingOrError path="itens" isLoading={isLoading} isError={isError} />
      ) : (
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={6}
          justifyContent="center"
          alignItems="center"
        >
          {data?.data &&
            data.data.map((item, index) => (
              <Card
                key={index}
                boxShadow="dark-lg"
                borderRadius="lg"
                bgGradient="linear(to-b, gray.800, gray.900)"
                color="white"
                height={520}
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              >
                <CardHeader p={0} overflow="hidden" borderTopRadius="lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                    className="object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign="center"
                    mb={2}
                  >
                    {item.name}
                  </Text>
                  <Text fontSize="md" color="gray.400" textAlign="center">
                    Skin para {item.category}
                  </Text>

                  <Progress
                    value={item.float ? +item.float * 100 : 0}
                    size="sm"
                    colorScheme={getFloatColor(item.float ? +item.float : 0)}
                    borderRadius="lg"
                    mt={2}
                  />
                </CardBody>
                <CardFooter
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box
                    fontSize="2xl"
                    fontWeight="bold"
                    color="green.300"
                    mb={2}
                  >
                    {formatPrice(item.price)}
                  </Box>
                  <Button
                    colorScheme="yellow"
                    variant="solid"
                    width="full"
                    borderRadius="full"
                    boxShadow="lg"
                  >
                    Comprar Agora
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </Grid>
      )}
    </motion.section>
  );
};

export default SectionList;
