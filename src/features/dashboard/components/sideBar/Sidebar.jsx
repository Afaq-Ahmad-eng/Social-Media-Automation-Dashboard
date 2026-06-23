import React from 'react'
import { Box, VStack, HStack, Text, Badge, Icon } from '@chakra-ui/react'
import { 
  LuLayoutDashboard, 
  LuLayers, 
  LuVideo, 
  LuChartBar,  // ✅ Added this import
  LuUsers, 
  LuSettings 
} from 'react-icons/lu'

export function Sidebar() {
  const menuItems = [
    { label: 'Dashboard', icon: LuLayoutDashboard, isActive: true },
    { label: 'Content Queue', icon: LuLayers },
    { label: 'Creator Studio', icon: LuVideo },
    { label: 'Analytics', icon: LuChartBar, isNew: true },  // Now works with LuChartBar
    { label: 'Client Accounts', icon: LuUsers },
    { label: 'Settings', icon: LuSettings },
  ]

  return (
    <Box 
      w="260px" 
      bg="#0a0d14"
      borderRightWidth="1px" 
      borderColor="gray.900" 
      h="100vh" 
      p="6"
      display={{ base: "none", md: "block" }}
    >
      <VStack align="stretch" gap="2" mt="8">
        {menuItems.map((item, index) => (
          <HStack
            key={index}
            p="3"
            borderRadius="lg"
            bg={item.isActive ? "blue.600" : "transparent"}
            color={item.isActive ? "white" : "gray.400"}
            _hover={{ bg: item.isActive ? "blue.600" : "whiteAlpha.50", color: "white" }}
            cursor="pointer"
            justify="space-between"
          >
            <HStack gap="3">
              <Icon as={item.icon} boxSize="18px" />  {/* Changed to use Chakra Icon */}
              <Text fontSize="sm" fontWeight={item.isActive ? "semibold" : "medium"}>
                {item.label}
              </Text>
            </HStack>
            
            {item.isNew && (
              <Badge bg="blue.500/20" color="blue.300" size="xs" px="2" borderRadius="md">
                New
              </Badge>
            )}
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}