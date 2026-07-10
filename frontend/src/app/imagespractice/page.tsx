import { HStack, VStack } from "@chakra-ui/react/stack";
import { Badge, Box, Button, Heading, Spacer, Text } from "@chakra-ui/react";

export default function ImagesPractice() {
  return (
    <VStack minH="90vh">
      <HStack borderWidth="1px" borderColor="red.500" w="90%" mt="8.5rem" alignItems="center">  
        <Heading fontSize="4xl" fontWeight="bold">Images Practice</Heading>  
      </HStack>
      {/*------------------------------------------SEARCH & FILTER---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="10rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Search Bar + Filters</Text>
          <Spacer/>
          <Badge>24 Results</Badge>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="98%" h="30%" >
          <Text>Search & Filter Components</Text>
        </HStack>
      </VStack>
      {/*------------------------------------------IMAGES---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="35rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Image Card Grid</Text>
          <Spacer/>
          <Button>Grid</Button>
          <Button>List</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="90%" >
          <Text>Image Card Grid</Text>
        </Box>
      </VStack>
      {/*------------------------------------------PAGENATION---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="10rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Pagenation</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="60%" >
          <Text>Pagenation Component</Text>
        </Box>
      </VStack>
      {/*------------------------------------------BACKGROUND IMAGES---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="35rem" mt="1.5rem" mb="11rem" alignItems="center" justifyContent="center">

        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Background Image</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="100%" h="90%" >
          <Text>Background Image Component</Text>
        </Box>
      </VStack>
    </VStack>
  )
}