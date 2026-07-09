import { VStack } from "@chakra-ui/react/stack";
import { Text } from "@chakra-ui/react";

export default function UserDashboard() {
  return (
    <VStack minH="90vh">
            <Text fontSize="4xl" fontWeight="bold" mb={4}>
              User Dashboard
            </Text>
    </VStack>
  )
}