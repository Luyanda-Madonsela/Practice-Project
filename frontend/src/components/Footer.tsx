import React from 'react'
import { Box, HStack, Spacer, VStack, Text, Divider } from '@chakra-ui/react'
import Image from 'next/image'

export default function Footer() {
  return (
        <VStack as="footer" w="maxW" h="27rem" bg="gray.800" color="white" display="flex" alignItems="center" justifyContent="center">
            <HStack w="90%" h="13rem" mt="4rem">
                <VStack w="20rem" h="13rem" alignItems="center" justifyContent="center">
                    {/*---------------------------LOGO----------------------------- */}                    
                    <Box w="20rem" h="5rem">
                        <HStack w="20rem" h="3rem">
                            <Box w="8%" h="1.5rem" display="flex" alignItems="center" justifyContent="center" borderRadius="0.375rem" bgColor="#2563EB">
                                <Image src="/zap.svg" alt="logo" width={15} height={20} />
                            </Box>
                            <Text fontSize="lg" fontWeight="bold"> Practice Project </Text>
                        </HStack>
                    </Box>
                    {/*------------------------------------------------------------ */}
                    <Text color="#94A3B8" w="20rem" h="7rem" fontSize="0.9375rem" fontFamily="Geist, sans-serif" fontWeight="400" fontStyle="normal" lineHeight="160%">
                        Reliable by design. Transparent by default. Infrastructure built on proven engineering principles your team can trust.
                    </Text>
                    {/*---------------------------SOCIAL MEDIA----------------------- */}
                    <HStack w="20rem" h="2rem" spacing="1rem">
                        <Image src="/twitter.svg" alt="twitter" width={20} height={20} />
                        <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
                        <Image src="/github.svg" alt="github" width={20} height={20} />
                    </HStack>
                    {/*------------------------------------------------------------- */}
                </VStack>
            </HStack>
            <Spacer/>
            <Divider orientation="horizontal" borderWidth="1px" borderColor="#020617" w="90%" />
            <HStack w="90%" h="3.12rem" mb="2.5rem">
                <Text color="#94A3B8" fontSize="0.875rem" w="25rem" h="3rem" pt="2rem">
                    © 2024 Practice Systems Inc. All rights reserved.
                </Text>
                <Spacer/>
                <HStack w="23rem" h="3rem">
                    <Text color="#94A3B8" fontSize="0.875rem" w="25rem" h="3rem" pt="2rem">
                        Privacy Policy
                    </Text>
                    <Text color="#94A3B8" fontSize="0.875rem" w="25rem" h="3rem" pt="2rem">
                        Terms of Service
                    </Text>
                    <Text color="#94A3B8" fontSize="0.875rem" w="25rem" h="3rem" pt="2rem">
                        Cookie Settings
                    </Text>
                </HStack>
            </HStack>
        </VStack>
    )
}
