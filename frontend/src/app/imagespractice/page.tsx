import { HStack, VStack } from "@chakra-ui/react/stack";
import {
  Badge,
  Box,
  Card,
  CardBody,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  SimpleGrid,
  Text,
  type IconProps,
} from "@chakra-ui/react";

const imageCards = [
  {
    title: "Mountain Ridge",
    tags: ["Landscape", "Daylight", "4K"],
    image:
      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(15,23,42,0.16)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80')",
    position: "center 58%",
  },
  {
    title: "Workspace Setup",
    tags: ["Product", "Minimal", "Studio"],
    image:
      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(15,23,42,0.1)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80')",
    position: "center 56%",
  },
  {
    title: "Abstract Shapes",
    tags: ["Abstract", "Pastel", "Graphic"],
    image:
      "radial-gradient(circle at 72% 42%, rgba(159, 193, 255, 0.65), transparent 18%), linear-gradient(135deg, rgba(248, 208, 198, 0.9) 18%, rgba(200, 233, 227, 0.88) 38%, rgba(231, 221, 255, 0.92) 60%, rgba(243, 240, 231, 0.98) 100%)",
    overlay: true,
  },
  {
    title: "Coffee Shop",
    tags: ["Interior", "Warm", "Lifestyle"],
    image:
      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(15,23,42,0.14)), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80')",
    position: "center 55%",
  },
  {
    title: "City Night",
    tags: ["Urban", "Night", "Cool"],
    image:
      "linear-gradient(180deg, rgba(15,23,42,0.12), rgba(15,23,42,0.26)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80')",
    position: "center 52%",
  },
  {
    title: "Greenery",
    tags: ["Nature", "Bright", "Still Life"],
    image:
      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(15,23,42,0.08)), url('https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80')",
    position: "center 62%",
  },
];

const backgroundImageShowcase = {
  title: "Hero background",
  description: "Use a wide, low-contrast image with clear negative space for overlays.",
  image:
    "linear-gradient(180deg, rgba(148, 163, 184, 0.32) 0%, rgba(15, 23, 42, 0.18) 100%), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
  position: "center 62%",
};

function SearchIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M14.1667 14.1667L17.5 17.5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 15C12.2018 15 15 12.2018 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15Z"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

function SortIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M6.66667 3.33337V16.6667"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
      />
      <path
        d="M3.75 6.25L6.66667 3.33333L9.58333 6.25"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 16.6666V3.33325"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
      />
      <path
        d="M10.4167 13.75L13.3333 16.6667L16.25 13.75"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

function FilterIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M3.33334 5H16.6667"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
      />
      <path
        d="M5.83334 10H14.1667"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
      />
      <path
        d="M8.33334 15H11.6667"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
      />
    </Icon>
  );
}

function ChevronLeftIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M11.6667 5.83325L7.5 9.99992L11.6667 14.1666"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

function ChevronRightIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M8.33331 5.83325L12.5 9.99992L8.33331 14.1666"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

function ChevronDownIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

function GridViewIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M3.33334 4.16675C3.33334 3.70651 3.70644 3.33341 4.16668 3.33341H7.5C7.96025 3.33341 8.33334 3.70651 8.33334 4.16675V7.50008C8.33334 7.96032 7.96025 8.33341 7.5 8.33341H4.16668C3.70644 8.33341 3.33334 7.96032 3.33334 7.50008V4.16675Z"
        stroke="currentColor"
        strokeWidth="1.67"
      />
      <path
        d="M11.6667 4.16675C11.6667 3.70651 12.0398 3.33341 12.5 3.33341H15.8333C16.2936 3.33341 16.6667 3.70651 16.6667 4.16675V7.50008C16.6667 7.96032 16.2936 8.33341 15.8333 8.33341H12.5C12.0398 8.33341 11.6667 7.96032 11.6667 7.50008V4.16675Z"
        stroke="currentColor"
        strokeWidth="1.67"
      />
      <path
        d="M3.33334 12.5C3.33334 12.0398 3.70644 11.6667 4.16668 11.6667H7.5C7.96025 11.6667 8.33334 12.0398 8.33334 12.5V15.8333C8.33334 16.2936 7.96025 16.6667 7.5 16.6667H4.16668C3.70644 16.6667 3.33334 16.2936 3.33334 15.8333V12.5Z"
        stroke="currentColor"
        strokeWidth="1.67"
      />
      <path
        d="M11.6667 12.5C11.6667 12.0398 12.0398 11.6667 12.5 11.6667H15.8333C16.2936 11.6667 16.6667 12.0398 16.6667 12.5V15.8333C16.6667 16.2936 16.2936 16.6667 15.8333 16.6667H12.5C12.0398 16.6667 11.6667 16.2936 11.6667 15.8333V12.5Z"
        stroke="currentColor"
        strokeWidth="1.67"
      />
    </Icon>
  );
}

function ListViewIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M5.83334 5H16.6667" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" />
      <path d="M5.83334 10H16.6667" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" />
      <path d="M5.83334 15H16.6667" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" />
      <path d="M3.33334 5H3.34168" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M3.33334 10H3.34168" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M3.33334 15H3.34168" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </Icon>
  );
}

function FavoriteIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M10 2.91675L12.0867 7.14591L16.7533 7.82425L13.3767 11.1167L14.1733 15.7642L10 13.5709L5.82667 15.7642L6.62334 11.1167L3.24667 7.82425L7.91334 7.14591L10 2.91675Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

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
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" mt="3rem" px={{ base: "0.9rem", md: "1rem" }} py="1rem" alignItems="center" justifyContent="start">
        <HStack w="100%" mb="0.5rem"> 
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
          <Badge
            bg="#F8FAFC"
            color="#64748B"
            borderRadius="999px"
            px="0.7rem"
            py="0.35rem"
            fontFamily="Geist, sans-serif"
            fontWeight="600"
            fontSize="0.75rem"
            lineHeight="1">
            24 results
          </Badge>
        </HStack>
        <Flex
          w="100%"
          direction={{ base: "column", lg: "row" }}
          gap="0.75rem"
          align={{ base: "stretch", lg: "center" }}>
          <InputGroup flex="1">
            <InputLeftElement pointerEvents="none" h="2.5rem" pl="0.2rem">
              <SearchIcon boxSize="1.1rem" color="#94A3B8" />
            </InputLeftElement>
            <Input
              h="2.5rem"
              borderRadius="0.9rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              bg="#FFFFFF"
              pl="2.75rem"
              pr="5rem"
              fontFamily="Geist, sans-serif"
              fontSize="0.95rem"
              color="#0F172A"
              placeholder="Search images..."
              _placeholder={{ color: "#94A3B8" }}
              _hover={{ borderColor: "#CBD5E1" }}
              _focusVisible={{ borderColor: "#CBD5E1", boxShadow: "0 0 0 1px #CBD5E1" }}
            />

          </InputGroup>
          <Spacer />
          <Flex gap="0.75rem" direction={{ base: "column", sm: "row" }}>
            <Button
              leftIcon={<SortIcon boxSize="1rem" color="#475569" />}
              rightIcon={<ChevronDownIcon boxSize="0.95rem" color="#64748B" />}
              h="2.5rem"
              minW={{ base: "100%", sm: "8.7rem" }}
              px="1rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              borderRadius="0.9rem"
              bg="#FFFFFF"
              color="#0F172A"
              fontFamily="Geist, sans-serif"
              fontSize="0.95rem"
              fontWeight="700"
              _hover={{ bg: "#F8FAFC" }}
              _active={{ bg: "#F1F5F9" }}>
              Sort: Newest
            </Button>
            <Button
              leftIcon={<FilterIcon boxSize="1rem" color="#475569" />}
              rightIcon={<ChevronDownIcon boxSize="0.95rem" color="#64748B" />}
              h="2.5rem"
              minW={{ base: "100%", sm: "8rem" }}
              px="1rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              borderRadius="0.9rem"
              bg="#FFFFFF"
              color="#0F172A"
              fontFamily="Geist, sans-serif"
              fontSize="0.95rem"
              fontWeight="700"
              _hover={{ bg: "#F8FAFC" }}
              _active={{ bg: "#F1F5F9" }}>
              Filter: All
            </Button>
          </Flex>
        </Flex>
      </VStack>
      {/*------------------------------------------IMAGES---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" mt="1.5rem" px={{ base: "0.7rem", md: "0.9rem" }} py="0.8rem" alignItems="center" justifyContent="start" spacing="0.9rem">
        <HStack w="100%" mt="0.1rem"> 
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
          <HStack
            spacing="0.35rem"
            p="0.25rem"
            borderWidth="1px"
            borderColor="#E2E8F0"
            borderRadius="0.8rem"
            bg="#FFFFFF">
            <Button
              leftIcon={<GridViewIcon boxSize="0.95rem" />}
              h="2rem"
              px="0.85rem"
              borderRadius="0.6rem"
              bg="#2563EB"
              color="#FFFFFF"
              fontFamily="Geist, sans-serif"
              fontSize="0.85rem"
              fontWeight="700"
              _hover={{ bg: "#1D4ED8" }}
              _active={{ bg: "#1E40AF" }}>
              Grid
            </Button>
            <Button
              leftIcon={<ListViewIcon boxSize="0.95rem" color="#64748B" />}
              h="2rem"
              px="0.85rem"
              borderRadius="0.6rem"
              variant="ghost"
              color="#475569"
              fontFamily="Geist, sans-serif"
              fontSize="0.85rem"
              fontWeight="600"
              _hover={{ bg: "#F8FAFC" }}
              _active={{ bg: "#F1F5F9" }}>
              List
            </Button>
          </HStack>
        </HStack>
        <SimpleGrid w="100%" columns={{ base: 1, md: 2, xl: 3 }} spacing="0.8rem">
          {imageCards.map((card) => (
            <Card
              key={card.title}
              overflow="hidden"
              borderWidth="1px"
              borderColor="#E2E8F0"
              borderRadius="1rem"
              bg="#FFFFFF"
              boxShadow="0 1px 2px rgba(15, 23, 42, 0.04)">
              <CardBody p="0.55rem 0.55rem 0.75rem">
                <Box
                  position="relative"
                  h="8.05rem"
                  borderRadius="0.85rem"
                  bgImage={card.image}
                  bgSize="cover"
                  bgPosition={card.position ?? "center"}
                  bgRepeat="no-repeat"
                  overflow="hidden">
                  {card.overlay ? (
                    <>
                      <Box
                        position="absolute"
                        top="1.35rem"
                        left="5.5rem"
                        w="7.5rem"
                        h="3.5rem"
                        bg="rgba(255,255,255,0.45)"
                        transform="rotate(-45deg)"
                      />
                      <Box
                        position="absolute"
                        top="1rem"
                        left="7.8rem"
                        w="3.9rem"
                        h="3.9rem"
                        border="10px solid rgba(145, 128, 219, 0.55)"
                        borderRadius="999px"
                      />
                      <Box
                        position="absolute"
                        top="0.95rem"
                        right="5.3rem"
                        w="0"
                        h="0"
                        borderLeft="2.5rem solid transparent"
                        borderRight="2.5rem solid transparent"
                        borderBottom="2.8rem solid rgba(141, 212, 193, 0.72)"
                      />
                    </>
                  ) : null}
                  <IconButton
                    aria-label={`Favorite ${card.title}`}
                    icon={<FavoriteIcon boxSize="1.5rem" />}
                    position="absolute"
                    top="0.55rem"
                    right="0.55rem"
                    size="sm"
                    minW="2.15rem"
                    h="2.15rem"
                    borderRadius="999px"
                    bg="#FFFFFF"
                    color="#2563EB"
                    borderWidth="1px"
                    borderColor="#DBEAFE"
                    boxShadow="0 1px 2px rgba(15, 23, 42, 0.08)"
                    _hover={{ bg: "#EFF6FF" }}
                    _active={{ bg: "#DBEAFE" }}
                  />
                </Box>
                <VStack align="start" spacing="0.55rem" mt="0.75rem">
                  <Text
                    fontFamily="Geist, sans-serif"
                    fontWeight="700"
                    fontSize="0.98rem"
                    lineHeight="1.2"
                    color="#0F172A">
                    {card.title}
                  </Text>
                  <HStack spacing="0.45rem" flexWrap="wrap">
                    {card.tags.map((tag) => (
                      <Badge
                        key={`${card.title}-${tag}`}
                        px="0.48rem"
                        py="0.22rem"
                        borderRadius="999px"
                        borderWidth="1px"
                        borderColor="#E2E8F0"
                        bg="#F8FAFC"
                        color="#475569"
                        fontFamily="Geist, sans-serif"
                        fontWeight="500"
                        fontSize="0.72rem"
                        textTransform="none">
                        {tag}
                      </Badge>
                    ))}
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
      {/*------------------------------------------PAGENATION---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="10rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack w="98%" mt="1.5rem"> 
          <Text
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.9rem"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F172A">
              Pagination
          </Text>
          <Spacer/>
        </HStack>
        <Flex w="100%" flex="1" align="center" justify="center" pb="1.1rem">
          <HStack spacing="0.45rem">
            <IconButton
              aria-label="Previous page"
              icon={<ChevronLeftIcon boxSize="0.95rem" />}
              variant="ghost"
              minW="0"
              w="1.8rem"
              h="1.8rem"
              borderRadius="0.55rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              bg="#FFFFFF"
              color="#64748B"
              _hover={{ bg: "#F8FAFC" }}
            />
            <Button
              minW="0"
              w="1.8rem"
              h="1.8rem"
              p="0"
              borderRadius="0.55rem"
              bg="#2563EB"
              color="#FFFFFF"
              fontFamily="Geist, sans-serif"
              fontWeight="600"
              fontSize="0.82rem"
              _hover={{ bg: "#2563EB" }}>
              1
            </Button>
            <Button
              variant="ghost"
              minW="0"
              w="1.8rem"
              h="1.8rem"
              p="0"
              borderRadius="0.55rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              bg="#FFFFFF"
              color="#334155"
              fontFamily="Geist, sans-serif"
              fontWeight="500"
              fontSize="0.82rem"
              _hover={{ bg: "#F8FAFC" }}>
              2
            </Button>
            <Button
              variant="ghost"
              minW="0"
              w="1.8rem"
              h="1.8rem"
              p="0"
              borderRadius="0.55rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              bg="#FFFFFF"
              color="#334155"
              fontFamily="Geist, sans-serif"
              fontWeight="500"
              fontSize="0.82rem"
              _hover={{ bg: "#F8FAFC" }}>
              3
            </Button>
            <IconButton
              aria-label="Next page"
              icon={<ChevronRightIcon boxSize="0.95rem" />}
              variant="ghost"
              minW="0"
              w="1.8rem"
              h="1.8rem"
              borderRadius="0.55rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              bg="#FFFFFF"
              color="#64748B"
              _hover={{ bg: "#F8FAFC" }}
            />
          </HStack>
        </Flex>
      </VStack>
      {/*------------------------------------------BACKGROUND IMAGES---------------------------------------- */}
      <VStack
        bgColor="white"
        borderRadius="0.75rem"
        borderColor="#E2E8F0"
        borderWidth="1px"
        w="90%"
        mt="1.5rem"
        mb="11rem"
        px={{ base: "0.45rem", md: "0.55rem" }}
        pt="0.45rem"
        pb="0.55rem"
        alignItems="center"
        justifyContent="start"
        spacing="0.45rem">
        <HStack w="100%" px="0.35rem" pt="1rem"> 
          <Text
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.9rem"
            lineHeight="100%"
            letterSpacing="0%"
            color="#0F172A">
              Background Images
          </Text>
          <Spacer/>
        </HStack>
        <Box
          w="101%"
          h={{ base: "16rem", md: "21rem", xl: "24.75rem" }}
          borderRadius="0.5rem"
          bgImage={backgroundImageShowcase.image}
          bgSize="cover"
          bgPosition={backgroundImageShowcase.position}
          bgRepeat="no-repeat"
          position="relative"
          overflow="hidden">
          <Flex
            position="absolute"
            inset="0"
            align="end"
            px={{ base: "1rem", md: "1.15rem" }}
            pb={{ base: "1rem", md: "1.2rem" }}>
            <VStack align="start" spacing="0.2rem" maxW="28rem">
              <Text
                fontFamily="Geist, sans-serif"
                fontWeight="700"
                fontSize={{ base: "1.1rem", md: "1.45rem" }}
                lineHeight="1.15"
                color="#FFFFFF">
                {backgroundImageShowcase.title}
              </Text>
              <Text
                fontFamily="Geist, sans-serif"
                fontWeight="400"
                fontSize={{ base: "0.74rem", md: "0.84rem" }}
                lineHeight="1.35"
                color="rgba(255, 255, 255, 0.92)">
                {backgroundImageShowcase.description}
              </Text>
            </VStack>
          </Flex>
        </Box>
      </VStack>
    </VStack>
  )
}