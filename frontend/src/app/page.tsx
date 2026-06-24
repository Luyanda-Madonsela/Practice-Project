"use client";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main" minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="blue.600">
          Welcome to Django + Next.js
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Styled exclusively with Chakra UI v2. Strictly no Tailwind!
        </Text>
      </VStack>
    </Box>
  );
}
