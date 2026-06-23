import React, { useState } from 'react'
import { Box, useBreakpointValue, Text } from '@chakra-ui/react'
import { AutomationHeader } from './components/dashboardHeader/AutomationHeader'
import { StatCardsGrid } from './components/cards/StatCardsGrid'

export function DashboardMain() {
  const [showMobileStats, setShowMobileStats] = useState(false)
  
  // Scans the screen real estate
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box 
      p="6" 
      bg="#0f141c" 
      h="100vh" 
      w="100vw" 
      overflow="hidden" 
      display="flex"
      flexDirection="column"
    > 
      {/* Header with structural alignment and controls */}
      <AutomationHeader 
        isMobile={isMobile}
        showMobileStats={showMobileStats}
        onToggleStats={() => setShowMobileStats(!showMobileStats)}
      />

      {/* Scrollable Data Arena */}
      <Box flex="1" pr="2">
        {/* Shows metric boxes based on toggled menu criteria */}
        {(!isMobile || showMobileStats) && <StatCardsGrid />}
        
        {/* Main console engine log block */}
        <Box h="400px" border="1px dashed" borderColor="gray.800" borderRadius="xl" p="4" mt="2">
          <Text color="gray.500">Active Task Monitor Console Engine Ready...</Text>
        </Box>
      </Box>
    </Box>
  )
}