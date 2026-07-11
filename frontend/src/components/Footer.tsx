import React from 'react'
import { Box, HStack, Spacer, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from "../../public/zap.svg";

export default function Footer() {
  return (
        <VStack as="footer" w="maxW" h="27rem" bg="gray.800" color="white" display="flex" alignItems="center" justifyContent="center">
            <HStack borderWidth="1px" borderColor="red.500" w="90%" h="13rem" mt="4rem">
                <VStack borderWidth="1px" borderColor="red.500" w="20rem" h="13rem" alignItems="center" justifyContent="center">
                    <Box borderWidth="1px" borderColor="red.500" w="20rem" h="3rem">
                        <HStack w="20rem" h="3rem">
                            <Box w="10%" h="2rem" display="flex" alignItems="center" justifyContent="center" bgColor="blue.500">
                              <Image src={Logo} alt="logo" width={20} height={20} />
                            </Box>
                            <Text fontSize="lg" fontWeight="bold"> Practice Project </Text>
                        </HStack>
                    </Box>
                    <Box borderWidth="1px" borderColor="red.500" w="20rem" h="8rem"></Box>
                    <Box borderWidth="1px" borderColor="red.500" w="20rem" h="2rem"></Box>
                </VStack>
            </HStack>
            <Spacer/>
            <HStack borderWidth="1px" borderColor="red.500" w="90%" h="3.12rem" mb="2.5rem">
                <Box borderWidth="1px" borderColor="red.500" w="25rem" h="3rem"></Box>
                <Spacer/>
                <Box borderWidth="1px" borderColor="red.500" w="30rem" h="3rem"></Box>
            </HStack>
        </VStack>
    )
}
