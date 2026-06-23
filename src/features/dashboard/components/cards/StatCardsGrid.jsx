import React from 'react'
import { SimpleGrid, Box, Text, Heading } from '@chakra-ui/react'

export function StatCardsGrid() {
  const cards = [
    { title: "Active Queue Pipeline", value: "30 Posts" },
    { title: "Success Index", value: "98.4%" },
    { title: "Token Lifespans", value: "00:01:00:23", sub: "Countdown" },
    { title: "Token Lifespans", value: "98% / 40% / 78%", isProgress: true }
  ]

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6" mb="8">
      {cards.map((card, i) => (
        <Box 
          key={i} 
          p="6" 
          bg="#1a202c" // Dark slate background matching Gemini_Generated_Image_lud8utlud8utlud8.png
          borderWidth="1px" 
          borderColor="gray.800" 
          borderRadius="xl"
          shadow="md"
        >
          <Text fontSize="sm" color="gray.400" mb="4">{card.title}</Text>
          <Heading size="xl" color="white" fontWeight="bold">
            {card.value}
          </Heading>
          {card.sub && <Text fontSize="xs" color="gray.500" mt="2">{card.sub}</Text>}
        </Box>
      ))}
    </SimpleGrid>
  )
}