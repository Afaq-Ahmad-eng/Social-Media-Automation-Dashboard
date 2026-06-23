import React from 'react'
import { Flex, Text, Circle, IconButton } from '@chakra-ui/react'
import { FiMenu, FiX } from 'react-icons/fi'

export function AutomationHeader({ isMobile, showMobileStats, onToggleStats }) {
  return (
    <Flex align="center" justify="space-between" mb="6" w="full">
      {/* Left side: Status indicators */}
      <Flex align="center" gap="3">
        <Circle size="3" bg="green.400" />
        <Text fontSize="xl" fontWeight="bold" color="white">
          Automation Core <Text as="span" color="green.400" fontWeight="medium">Online</Text>
        </Text>
      </Flex>

      {/* Right side: Hamburger toggle button (Only displays on small mobile screens) */}
      {isMobile && (
        <IconButton
          aria-label="Toggle Metrics Panel"
          onClick={onToggleStats}
          variant="outline"
          colorPalette="gray"
          borderColor="gray.800"
          _hover={{ bg: "gray.800" }}
          size="sm"
        >
          {showMobileStats ? <FiX color="white" /> : <FiMenu color="white" />}
        </IconButton>
      )}
    </Flex>
  )
}