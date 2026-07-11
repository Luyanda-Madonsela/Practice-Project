import { HStack, VStack } from "@chakra-ui/react/stack";
import { Badge, Box, Button, Heading, Spacer, Text } from "@chakra-ui/react";

export default function ImagesPractice() {
  return (
    <VStack minH="90vh" bgColor="#F7FCF7">
      <HStack w="90%" mt="8.5rem" alignItems="center">  
        <Heading 
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="1.75rem"
          lineHeight="100%"
          letterSpacing="0%"
          color="#14141F">
            Images Practice Page
        </Heading>  
      </HStack>
      {/*------------------------------------------SEARCH & FILTER---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="10rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack w="98%" mt="1rem" mb="1rem"> 
          <Text
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.9rem"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F172A">
              Search Bar + Filters
            </Text>
          <Spacer/>
          <Badge>24 Results</Badge>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="98%" h="30%" >
          <Text>Search & Filter Components</Text>
        </HStack>
      </VStack>
      {/*------------------------------------------IMAGES---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="35rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack w="98%" mt="0.5rem"> 
          <Text
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.9rem"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F172A">
              Image Card Grid
          </Text>
          <Spacer/>
          <Button>Grid</Button>
          <Button>List</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="90%" >
          <Text>Image Card Grid</Text>
        </Box>
      </VStack>
      {/*------------------------------------------PAGENATION---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="10rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack w="98%" mt="1rem"> 
          <Text
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.9rem"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F172A">
              Pagenation
          </Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="60%" >
          <Text>Pagenation Component</Text>
        </Box>
      </VStack>
      {/*------------------------------------------BACKGROUND IMAGES---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="35rem" mt="1.5rem" mb="11rem" alignItems="center" justifyContent="center">
        <HStack w="98%" mt="0.5rem"> 
          <Text
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.9rem"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F172A">
              Background Image
          </Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="100%" h="100%" >
          <Text>Background Image Component</Text>
        </Box>
      </VStack>
    </VStack>
  )
}