"use client";

import { HStack, VStack } from "@chakra-ui/react/stack";
import { Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { Box } from '@chakra-ui/react';


export default function AdminDashboard() {
  return (
    <HStack minH="90vh" w="94%" mt="4rem" alignItems="center">
      <VStack as="aside" w="15%" minH="78.7rem"  borderRightWidth="0.2px" borderRightColor="#E2E8F0" >
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
                <HStack ml="12rem" w="25rem" h="3rem">
                  <Box w="10%" h="2rem" display="flex" alignItems="center" justifyContent="center" borderRadius="0.375rem" bgColor="#2563EB">
                    <Image src="/zap.svg" alt="logo" width={20} height={20} />
                  </Box>
                  <Text fontSize="lg" fontWeight="bold"> Practice Project </Text>
                </HStack>
            </Link>




            
      </VStack>
      <VStack w="85%" minH="70rem">
        <HStack borderBottomWidth="1px" borderBottomColor="#E2E8F0" w="100%" h="4rem">
          <Text fontSize="2xl"  ml="1rem">Admin Overview</Text>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="13rem">
          <Text fontSize="2xl"  ml="1rem">Stats</Text>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="25rem">
          <Text fontSize="2xl"  ml="1rem">User Activity</Text>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="35rem">
          <Text fontSize="2xl"  ml="1rem">All Users</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}