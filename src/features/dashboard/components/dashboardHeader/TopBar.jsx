//External dependencies 
// 1. React & Hook dependencies
import React from 'react'

// 2. Chakra UI Layout & UI components
import { 
  Flex, 
  Box, 
  Text, 
  Circle, 
  HStack, 
  Input, 
  Image, 
  IconButton 
} from '@chakra-ui/react'

// 3. Icon Libraries (Make sure lucide-react and react-icons are installed)
import { LuSearch } from 'react-icons/lu' // Lucide Search Icon variant
import { FiMenu, FiX } from 'react-icons/fi' // Feather Menu / Close Icons
// Inside components/dashboardHeader/TopBar.jsx
export function TopBar({ isMobile, showMobileStats, onToggleStats }) {
  return (
    <Flex align="center" justify="space-between" w="full" py="4" px="6" borderBottomWidth="1px" borderColor="gray.900">
      
      {/* Left side: Status indicators */}
      <Flex align="center" gap="3">
        <Circle size="2" bg="green.400" />
        <Text fontSize="lg" fontWeight="bold" color="white">
          Automation Core <Text as="span" color="green.400" fontWeight="medium">Online</Text>
        </Text>
      </Flex>

      {/* Right side utilities window */}
      <HStack gap="4" justify="flex-end" flex={isMobile ? "none" : "1"}>
        
        {/* CHANGE THIS: Hide search on base and tablets, show on lg+ */}
        <Box display={{ base: "none", lg: "block" }} position="relative" w="300px">
          <Input 
            placeholder="Search" 
            bg="#161b22" 
            borderColor="gray.800" 
            size="sm" 
            borderRadius="md"
            color="white"
            pl="9"
            _placeholder={{ color: "gray.500" }}
          />
          <Box position="absolute" left="3" top="50%" transform="translateY(-50%)" color="gray.500">
            <LuSearch size="14px" />
          </Box>
        </Box>

        {/* Profile Avatar */}
        <Image 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" 
          boxSize="32px" 
          borderRadius="full" 
          alt="Profile"
          border="1px solid"
          borderColor="gray.700"
        />

        {/* Hamburger Toggle Controls (Shows up on mobile and iPads now) */}
        {isMobile && (
          <IconButton
            aria-label="Toggle Metrics Panel"
            onClick={onToggleStats}
            variant="outline"
            borderColor="gray.800"
            size="sm"
          >
            {showMobileStats ? <FiX color="white" /> : <FiMenu color="white" />}
          </IconButton>
        )}
      </HStack>
    </Flex>
  )
}