//External dependencies
import React, { useState } from 'react'
import { Flex, Box, Grid, GridItem, useBreakpointValue, Dialog } from '@chakra-ui/react'
//Internal dependencies
import { Sidebar } from './components/sideBar/Sidebar'
import { TopBar } from './components/dashboardHeader/TopBar' 
import { StatCardsGrid } from './components/cards/StatCardsGrid'
import { RecentPosts } from './components/recentPosts/RecentPosts'
import { UpcomingPosts } from './components/upComingPosts/UpComingPosts'

const recentPosts = [
  {
    title: "Social Media Automation System Launch Details",
    content: "Deploying core engine systems into staging landscapes...",
    platform: "facebook",
    sentAt: "2023-12-15T22:00:00.000Z",
    status: "Dispatched"
  },
  {
    title: "Social Media Automation Hacks and Optimization Tips",
    content: "Maximizing scheduling concurrency rates across distributed workers.",
    platform: "instagram",
    sentAt: "2023-12-15T22:00:00.000Z",
    status: "Dispatched"
  },
  {
    title: "Social Media Automation Contents Blueprint Strategy",
    content: "Mapping architectural blueprints down into clean vector tables.",
    platform: "x",
    sentAt: "2023-12-19T22:00:00.000Z",
    status: "Dispatched"
  }
];

const upcomingPosts = [
  {
    title: "Social Media Automation Contents",
    platform: "x",
    scheduleOffset: "1m"
  },
  {
    title: "Chronoisolation to Peria Upcoming Post",
    platform: "instagram",
    scheduleOffset: "5m"
  },
  {
    title: "Post Title: The Ratsakiiy Automating Posts",
    platform: "facebook",
    scheduleOffset: "120m"
  },
  {
    title: "There is awita Development Videos",
    platform: "instagram",
    scheduleOffset: "8m"
  },
  {
    title: "This is Jrtemtwunune Opportunities",
    platform: "instagram",
    scheduleOffset: "11h"
  }
];

export function DashboardMain() {
  const [showMobileStats, setShowMobileStats] = useState(false)
  
  // CHANGED: iPads/Tablets are now included in the mobile toggle view (base up to lg)
  const isMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <Flex h="100vh" w="100vw" bg="#0f141c" overflow="hidden">
      {/* 1. Left Fixed Workspace Navigation Panel (Hidden on base/tablets, visible on lg+) */}
      <Sidebar />

      {/* 2. Main Work Execution Window */}
      <Flex flex="1" direction="column" h="full" w="full" minW="0">
        
        {/* Top bar containing alignment, search utilities, and mobile hamburger controls */}
        <TopBar 
          isMobile={isMobile}
          showMobileStats={showMobileStats}
          onToggleStats={() => setShowMobileStats(!showMobileStats)}
        />

        {/* Scrollable Data Arena */}
        <Box flex="1" p={{ base: "4", md: "6" }} overflowY="auto">
          
          {/* DESKTOP VIEW STATS: Renders normally in step layout on large screens */}
          {!isMobile && <StatCardsGrid />}
          
          {/* TABLET/MOBILE TOGGLED VIEW: Render inside a clean Dialog overlay wrapper */}
          {isMobile && (
            <Dialog.Root 
              open={showMobileStats} 
              onOpenChange={(e) => setShowMobileStats(e.open)}
              placement="center"
            >
              <Dialog.Backdrop bg="blackAlpha.700" />
              <Dialog.Content 
                bg="#0f141c" 
                p="4" 
                borderColor="gray.800" 
                borderWidth="1px" 
                maxW={{ base: "calc(100vw - 32px)", md: "600px" }} // Restricts extreme modal widths on iPads
                borderRadius="xl"
              >
                <Dialog.Header>
                  <Dialog.Title color="white" fontSize="md" mb="2">Dashboard Metrics</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body maxH="75vh" overflowY="auto">
                  <StatCardsGrid />
                </Dialog.Body>
                <Dialog.CloseTrigger color="white" />
              </Dialog.Content>
            </Dialog.Root>
          )}
          
          {/* 2-Column Responsive Grid Split: Aligned with the 'lg' breakpoint */}
          <Grid templateColumns={{ base: "1fr", lg: "2.3fr 1fr" }} gap={{ base: "4", md: "6" }} alignItems="start">
            
            {/* Left Column Area: Recent Execution Stream Table */}
            <GridItem minW="0">
              <RecentPosts recentPosts={recentPosts} />
            </GridItem>

            {/* Right Column Area: Upcoming Timeline Panel */}
            <GridItem minW="0">
              <UpcomingPosts upcomingPosts={upcomingPosts} />
            </GridItem>

          </Grid>
        </Box>
      </Flex>
    </Flex>
  )
}