import { createParam } from 'solito'
import { Link as SolitoLink } from 'solito/link'
import React from 'react'
import { Center, Heading, Button, Box } from 'native-base'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  return (
    <Center
      flex="1"
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <Heading>{`Hey there, ${id}! 👋`}</Heading>
      <Box mt="6">
        <SolitoLink href="/">
          <Button pointerEvents="none" colorScheme="secondary">
            Go Back
          </Button>
        </SolitoLink>
      </Box>
    </Center>
  )
}
