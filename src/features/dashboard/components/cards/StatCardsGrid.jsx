import React from "react";
import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Progress,
  Badge,
} from "@chakra-ui/react";

export function StatCardsGrid() {
  return (
    <Box as="section" aria-label="Dashboard Statistics">
      {/* CHANGE: Dynamic columns adjust elegantly on smaller frames */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, xl: 4 }} gap="4" mb="6">
        {/* First Card: Active Queue Pipeline */}
        <Box
          as="article"
          p="4"
          bg="#1a202c"
          borderWidth="1px"
          borderColor="gray.800"
          borderRadius="xl"
          shadow="md"
          role="statistic"
          aria-label="Active Queue Pipeline Statistics"
        >
          <VStack align="start" gap="4">
          <Text
            as="h3"
            fontSize="l"
            color="gray.400"
            mb="1"
            fontWeight="medium"
          >
            Active Queue Pipeline
          </Text>
          <Heading as="p" size="4xl" color="white" fontWeight="bold" mb="1">
            30 Posts
          </Heading>
          </VStack>
        </Box>

        {/* Second Card: Success Index with Progress Bar */}
        <Box
          as="article"
          p="4"
          bg="#1a202c"
          borderWidth="1px"
          borderColor="gray.800"
          borderRadius="xl"
          shadow="md"
          role="statistic"
          aria-label="Success Index Progress"
        >
          <Text
            as="h3"
            fontSize="xs"
            color="gray.400"
            mb="2"
            fontWeight="medium"
          >
            Success Index
          </Text>
          <Box>
            <Text fontSize="3xl" color="white" fontWeight="bold" mb="1">
              98%
            </Text>
            <Progress.Root value={98.4} size="sm">
              <Progress.Track bg="gray.700" borderRadius="full" h="6px">
                <Progress.Range bg="blue.600" borderRadius="full" />
              </Progress.Track>
            </Progress.Root>
          </Box>
        </Box>

        {/* Third Card: Token Lifespans with Countdown */}
        <Box
          as="article"
          p="4"
          bg="#1a202c"
          borderWidth="1px"
          borderColor="gray.800"
          borderRadius="xl"
          shadow="md"
          role="statistic"
          aria-label="Token Lifespans Countdown"
        >
          <Text
            as="h3"
            fontSize="xs"
            color="gray.400"
            mb="1"
            fontWeight="medium"
          >
            Token Lifespans
          </Text>
          <Heading
            as="p"
            size="lg"
            color="white"
            fontWeight="bold"
            fontFamily="monospace"
          >
            00:01:00:23
          </Heading>
          <Badge
            bg="blue.500/20"
            color="blue.300"
            px="2"
            py="0.5"
            borderRadius="md"
            mt="1"
            fontSize="xs"
            aria-label="Countdown status"
          >
            Countdown
          </Badge>
        </Box>

        {/* Fourth Card: Token Lifespans with Percentages and Progress Bars side-by-side */}
        <Box
          as="article"
          p="4"
          bg="#1a202c"
          borderWidth="1px"
          borderColor="gray.800"
          borderRadius="xl"
          shadow="md"
          role="statistic"
          aria-label="Token Lifespans Progress"
        >
          <Text
            as="h3"
            fontSize="xs"
            color="gray.400"
            mb="3"
            fontWeight="medium"
          >
            Token Lifespans
          </Text>

          <VStack align="stretch" gap="3">
            {[
              { id: 1, value: 98, color: "blue.600" },
              { id: 2, value: 40, color: "blue.300" },
              { id: 3, value: 78, color: "green.400" },
            ].map((token) => (
              <HStack
                key={token.id}
                justify="space-between"
                align="center"
                width="100%"
              >
                {/* Progress Bar takes up the available space */}
                <Progress.Root value={token.value} size="sm" flex="1">
                  <Progress.Track bg="gray.700" borderRadius="full" h="10px">
                    <Progress.Range bg={token.color} borderRadius="full" />
                  </Progress.Track>
                </Progress.Root>

                {/* Text sits neatly next to it */}
                <Text
                  fontSize="l"
                  color='white'
                  minWidth="40px"
                  textAlign="right"
                >
                  {token.value}%
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
