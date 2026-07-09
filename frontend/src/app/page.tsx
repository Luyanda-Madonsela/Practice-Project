"use client";
import { Box, Button, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";


export default function Home() {
  return (
    <VStack as="main" borderWidth="1px" borderColor="red.500" w="maxW" minH="70vh" alignItems="center" justifyContent="center" bg="gray.50">
      
      <Heading>What do you want to work on today?</Heading>
      
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={8} h="20rem">
        <Button as="a" href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Chakra UI Components</Button>
        <Button as="a" href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Images Practice</Button>
        <Button as="a" href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Text Practice </Button>
        <Button as="a" href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Date & Time Practice</Button>
        <Button as="a" href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Video Display Practice</Button>
        <Button as="a" href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Handling Documents Practice</Button>
        <Button as="a" href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Interactive Map Practice</Button>
        <Button as="a" href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Dark/ Light Mode Practice</Button>
      </Grid>

    </VStack>
  );
}
