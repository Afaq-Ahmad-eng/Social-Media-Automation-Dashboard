import React from 'react'
import { Box, Text, Table, Badge, Flex, SimpleGrid, VStack, HStack } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

// Helper to render platform badge icons cleanly
const PlatformIcon = ({ platform }) => {
  const lowerPlatform = platform?.toLowerCase()
  switch (lowerPlatform) {
    case 'facebook': return <FaFacebook color="#1877F2" size="18px" />
    case 'instagram': return <FaInstagram color="#E1306C" size="18px" />
    case 'twitter':
    case 'x': return <RiTwitterXFill color="#FFFFFF" size="18px" />
    case 'linkedin': return <FaLinkedin color="#0A66C2" size="18px" />
    default: return null
  }
}

export function RecentPosts({ recentPosts = [] }) {
  // Common Date Formatter Logic
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <Box 
      as="section"                 
      aria-labelledby="execution-stream-title"
      w="full" 
      bg="#161b22" 
      borderWidth="1px" 
      borderColor="gray.800" 
      borderRadius="xl" 
      p={{ base: "4", md: "6" }}
    >
      {/* Header */}
      <Text 
        id="execution-stream-title"
        as="h2" 
        fontSize="md" 
        fontWeight="bold" 
        color="white" 
        mb="4"
      >
        Execution Stream of Recently Sent Posts
      </Text>

      {/* --- 1. MOBILE & TABLET LAYOUT: Swaps table for flexible dynamic cards (Hidden on desktop) --- */}
      <SimpleGrid columns={1} gap="3" display={{ base: "grid", lg: "none" }}>
        {recentPosts.map((post, index) => (
          <Box 
            key={index}
            p="4"
            bg="#0f141c"
            borderRadius="lg"
            borderWidth="1px"
            borderColor="gray.900"
          >
            <VStack align="stretch" gap="3">
              <HStack justify="space-between" align="start">
                <Text color="gray.200" fontWeight="semibold" fontSize="sm" lineClamp={2} flex="1" pr="2">
                  {post.title}
                </Text>
                <Badge 
                  colorPalette="green" 
                  variant="solid" 
                  bg="green.500/20" 
                  color="green.400"
                  px="2" 
                  py="0.5" 
                  borderRadius="md"
                  fontSize="xs"
                  textTransform="capitalize"
                >
                  {post.status || 'Dispatched'}
                </Badge>
              </HStack>

              <HStack justify="space-between" align="center" borderTopWidth="1px" borderColor="gray.900" pt="2">
                <HStack gap="2">
                  <PlatformIcon platform={post.platform} />
                  <Text fontSize="xs" color="gray.500" textTransform="capitalize">{post.platform}</Text>
                </HStack>
                <Text fontSize="xs" color="gray.400">
                  {formatDate(post.sentAt)}
                </Text>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      {/* --- 2. DESKTOP LAYOUT: Renders formal rigid data grid (Hidden on mobile/tablets) --- */}
      <Box display={{ base: "none", lg: "block" }}>
        <Table.Root variant="simple" size="sm" interactive>
          <Table.Header borderBottomWidth="1px" borderColor="gray.800">
            <Table.Row>
              <Table.ColumnHeader color="gray.500" py="3">Post Title</Table.ColumnHeader>
              <Table.ColumnHeader color="gray.500" py="3">Platform</Table.ColumnHeader>
              <Table.ColumnHeader color="gray.500" py="3">Scheduled Time</Table.ColumnHeader>
              <Table.ColumnHeader color="gray.500" py="3" textAlign="right">Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {recentPosts.map((post, index) => (
              <Table.Row 
                key={index} 
                borderBottomWidth="1px" 
                borderColor="gray.900"
                _hover={{ bg: "whiteAlpha.50" }} 
              >
                <Table.Cell py="4" maxW="280px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                  <Text color="gray.200" fontWeight="medium">
                    {post.title}
                  </Text>
                </Table.Cell>

                <Table.Cell py="4">
                  <Flex align="center">
                    <PlatformIcon platform={post.platform} />
                    <Text as="span" display="none" srOnly>{post.platform}</Text>
                  </Flex>
                </Table.Cell>

                <Table.Cell py="4" color="gray.400" whiteSpace="nowrap">
                  {formatDate(post.sentAt)}
                </Table.Cell>

                <Table.Cell py="4" textAlign="right">
                  <Badge 
                    colorPalette="green" 
                    variant="solid" 
                    bg="green.500/20" 
                    color="green.400"
                    px="3" 
                    py="1" 
                    borderRadius="md"
                    textTransform="capitalize"
                  >
                    {post.status || 'Dispatched'}
                  </Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  )
}