import { HStack, VStack } from "@chakra-ui/react/stack";
import { Box, Button, Heading, Spacer, Text } from "@chakra-ui/react";

export default function VideoDisplayPractice() {
  return (
    <VStack minH="90vh" bgColor="#0F0F17">
      <HStack w="90%" mt="8.5rem" mb="3rem" alignItems="center">  
        <Heading 
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="1.75rem"
          lineHeight="100%"
          letterSpacing="0%"
          color="white">
            Video Display Practice
        </Heading>  
      </HStack>
      {/*------------------------------------------VIDEO PLAYER---------------------------------------- */}
      <VStack  borderRadius="1rem" bgColor="#0B1220" w="90%" h="45rem" alignItems="center" justifyContent="start">
        <HStack w="98%" mt="1rem"> 
          <Text
            color="white"
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.9rem"
            lineHeight="100%"
            letterSpacing="0%">
              Building a Modern Video Player UI - Dark Theme
            </Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" borderRadius="1rem" w="98%" h="80%" >
          <Text color="white">Video Player</Text>
        </Box>
      </VStack>

      {/*------------------------------------------VIDEOS---------------------------------------- */}
      <VStack borderRadius="1rem" bgColor="#0B1220" w="90%" h="35rem" mt="1.5rem" mb="13rem" alignItems="center" justifyContent="center">
        <HStack w="98%" mt="1rem"> 
          <Text
            color="white"
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.9rem"
            lineHeight="100%"
            letterSpacing="0%">
              Video Library Grid
          </Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="90%" >
          <Text>Video Card Grid</Text>
        </Box>
      </VStack>


    </VStack>
  )
}