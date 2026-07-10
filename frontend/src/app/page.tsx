"use client";
import { Box, Button, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
export default function Home() {
  return (
    <VStack as="main" borderWidth="1px" borderColor="red.500" w="maxW" minH="80vh" alignItems="center" justifyContent="center" bg="gray.50">
      
      <Heading>What do you want to work on today?</Heading>
      
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={8} h="20rem">
        <Button as={Link} href="/chakracomponents" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Chakra UI Components</Button>
        <Button as={Link} href="/imagespractice" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Images Practice</Button>
        <Button as={Link} href="/textpractice" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Text Practice </Button>
        <Button as={Link} href="/datetimepractice" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Date & Time Practice</Button>
        <Button as={Link} href="/videodisplaypractice" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Video Display Practice</Button>
        <Button as={Link} href="/documentspractice" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Documents Practice</Button>
        <Button as={Link} href="/admindashboard" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">Admin Dashboard</Button>
        <Button as={Link} href="/userdashboard" w="14rem" h="3.5rem" colorScheme="blue" variant="solid" size="lg">User Dashboard</Button>
      </Grid>

    </VStack>
  );
}