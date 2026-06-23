import React from 'react'
import { Box, Text, Flex, VStack } from '@chakra-ui/react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

// Helper to match social platform icons cleanly
const PlatformIcon = ({ platform }) => {
  switch (platform?.toLowerCase()) {
    case 'facebook': return <FaFacebook color="#1877F2" size="14px" />
    case 'instagram': return <FaInstagram color="#E1306C" size="14px" />
    case 'x': return <RiTwitterXFill color="#FFFFFF" size="14px" />
    default: return null
  }
}

export function UpcomingPosts({ upcomingPosts = [] }) {
  return (
    <Box 
      w="full" 
      bg="#161b22" 
      borderWidth="1px" 
      borderColor="gray.800" 
      borderRadius="xl" 
      p="6"
      h="full"
    >
      <Text fontSize="md" fontWeight="bold" color="white" mb="6">
        Upcoming Posts
      </Text>

      {/* Timeline Wrapper with relative position for the absolute vertical axis line */}
      <Box position="relative" pl="8">
        
        {/* 1. The connecting vertical timeline track line */}
        <Box 
          position="absolute"
          top="2"
          bottom="2"
          left="3"
          w="2px"
          bg="gray.800"
          zIndex="0"
        />

        {/* 2. The Timeline Rows Loop */}
        <VStack align="stretch" gap="6">
          {upcomingPosts.map((post, index) => {
            const isFirst = index === 0

            return (
              <Flex key={index} align="center" position="relative" zIndex="1">
                
                {/* Custom Glowing Indicator Node */}
                <Box 
                  position="absolute"
                  left="-31px" // Aligns perfectly with the track line
                  w="4"
                  h="4"
                  borderRadius="full"
                  bg={isFirst ? "blue.500" : "gray.900"}
                  border="2px solid"
                  borderColor={isFirst ? "blue.300" : "gray.700"}
                  boxShadow={isFirst ? "0 0 10px rgba(66, 153, 225, 0.6)" : "none"}
                />

                {/* Content Box containing Platform Icon & Description Details */}
                <Flex align="center" gap="4" w="full">
                  <Flex 
                    align="center" 
                    justify="center" 
                    p="2" 
                    bg="gray.900" 
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="gray.800"
                  >
                    <PlatformIcon platform={post.platform} />
                  </Flex>

                  <Box>
                    <Text color="gray.200" fontSize="sm" fontWeight="medium" lineClamp={1}>
                      {post.title}
                    </Text>
                    <Text color="gray.500" fontSize="xs" mt="0.5">
                      Scheduled {post.scheduleOffset}
                    </Text>
                  </Box>
                </Flex>

              </Flex>
            )
          })}
        </VStack>
      </Box>
    </Box>
  )
}