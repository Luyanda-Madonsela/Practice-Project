"use client";

import { HStack, VStack } from "@chakra-ui/react/stack";
import { Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { Box } from '@chakra-ui/react';
import { Button, Icon } from "@chakra-ui/react";
import { FiList, FiImage } from "react-icons/fi";

export default function AdminDashboard() {
  return (
    <HStack minH="90vh" w="100%" alignItems="center" bgColor="#EFF6FF">
      {/* ------------------------------SIDEBAR-------------------------------------*/}
      <VStack as="aside" w="15%" minH="100rem" bgColor="white"  borderRightWidth="0.2px" borderRightColor="#E2E8F0" h="100vh" position="fixed" left="0" >
            {/* ---------------------------LOGO------------------------------------*/}
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
                <HStack ml="12rem" w="25rem" h="3rem" mt="1rem">
                  <Box w="10%" h="2rem" display="flex" alignItems="center" justifyContent="center" borderRadius="0.375rem" bgColor="#2563EB">
                    <Image src="/zap.svg" alt="logo" width={20} height={20} />
                  </Box>
                  <Text fontSize="lg" fontWeight="bold"> Practice Project </Text>
                </HStack>
            </Link>
            {/* ----------------------SIDEBAR BUTTONS-----------------------------------*/}          
            <VStack spacing={2} align="stretch" w="200px">
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="gray.700"
                  fontWeight="medium"
                  iconSpacing="4"
                  leftIcon={<Icon as={FiList} />}
                  _hover={{ bg: "gray.100" }}
                  ml="-1.2rem"
                >
                  Overview
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="gray.700"
                  fontWeight="medium"
                  iconSpacing="4"
                  leftIcon={<Icon as={FiImage} />}
                  _hover={{ bg: "gray.50" }}
                  ml="-1.2rem"
                >
                  Images
                </Button>
          </VStack>
      </VStack>

      <VStack w="85%" minH="80rem" marginLeft="15.5%" >
      {/* ------------------------------NAV BAR---------------------------------*/}
        <HStack bgColor="white" borderBottomWidth="1px" borderBottomColor="#E2E8F0" w="101%" h="5rem" position="fixed" top="0" left="15%" right="0" zIndex={10}>
          <Text fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="1.5rem"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F172A"
            ml="1rem"
          >Admin Overview</Text>
        </HStack>
      {/* --------------------------------BODY-----------------------------------*/}
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="13rem" mt="7rem">
          <Text fontSize="2xl"  ml="1rem">Stats</Text>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="25rem" mt="2rem">
          <Text fontSize="2xl"  ml="1rem">User Activity</Text>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="35rem" mt="2rem" mb="15rem">
          <Text fontSize="2xl"  ml="1rem">All Users</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}