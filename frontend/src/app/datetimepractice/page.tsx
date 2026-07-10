import { VStack } from "@chakra-ui/react/stack";
import { Text, HStack, Heading, Spacer, Box } from "@chakra-ui/react";

export default function DateTimePractice() {
  return (
    <VStack minH="90vh">
      <HStack borderWidth="1px" borderColor="red.500" w="90%" mt="8.5rem" alignItems="center">  
        <Heading fontSize="4xl" fontWeight="bold">Date & Time Practice</Heading>  
      </HStack>
      {/*------------------------------------------CALENDAR---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="20%" h="18rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="0.5rem"> 
          <Text>Headers(H1-H6)</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="80%" >
          <Text>Calendar</Text>
        </Box>
      </VStack>
      {/*------------------------------------------SELECTED DATE---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="20%" h="5rem" mt="0.5rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="0.5rem"> 
          <Text>Selected Date</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="40%" >
          <Text>Date</Text>
        </Box>
      </VStack>
      {/*------------------------------------------TIMEZONES---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="10rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="0.5rem"> 
          <Text>Current Time In Multiple Timezones</Text>
          <Spacer/>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="98%" h="70%" >
          <VStack borderWidth="1px" borderColor="red.500" w="25%" h="100%">
            <Text>Pretoria</Text>
          </VStack>
          <VStack borderWidth="1px" borderColor="red.500" w="25%" h="100%">
            <Text>London</Text>
          </VStack>
          <VStack borderWidth="1px" borderColor="red.500" w="25%" h="100%">
            <Text>Tokyo</Text>
          </VStack>
          <VStack borderWidth="1px" borderColor="red.500" w="25%" h="100%">
            <Text>New York</Text>
          </VStack>
        </HStack>
      </VStack>
      {/*------------------------------------------TIME CALCULATIONS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="13rem" mt="2rem" mb="8rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="0.5rem"> 
            <Text>Time & Date Calculations</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="35%" >
          <Text>Time Calculations Component 1 </Text>
        </Box>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="35%" >
          <Text>Time Calculations Component 2</Text>
        </Box>
      </VStack>


    </VStack>
  )
}