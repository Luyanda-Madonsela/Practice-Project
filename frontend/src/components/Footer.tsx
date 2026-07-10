import React from 'react'
import { Box, HStack, Spacer, VStack } from '@chakra-ui/react'

export default function Footer() {
  return (
        <VStack as="footer" w="maxW" h="27rem" bg="gray.800" color="white" display="flex" alignItems="center" justifyContent="center">
            <HStack borderWidth="1px" borderColor="red.500" w="90%" h="13rem" mt="4rem">
                <VStack borderWidth="1px" borderColor="red.500" w="20rem" h="13rem" alignItems="center" justifyContent="center">
                    <Box borderWidth="1px" borderColor="red.500" w="20rem" h="3rem"></Box>
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
