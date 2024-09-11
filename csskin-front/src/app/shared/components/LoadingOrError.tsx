import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

interface LoadingOrErrorProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  path: string;
}

const LoadingOrError = ({
  isLoading,
  isError,
  errorMessage,
  path,
}: LoadingOrErrorProps) => {
  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        <Box>
          <AlertTitle>Erro ao carregar os {path}</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Box>
      </Alert>
    );
  }

  return null;
};

export default LoadingOrError;
