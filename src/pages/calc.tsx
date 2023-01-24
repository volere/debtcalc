import { Box, Container, Stack, StackDivider, Text } from '@chakra-ui/react'
import * as React from 'react'
import { PersonalInfoCard } from '../components/FormBase/AddressCard'
import { ProfileCard } from '../components/FormBase/ProfileCard'

const App = () => (
    <Container py={{ base: '4', md: '8' }}>
        <Stack spacing="5" divider={<StackDivider />}>
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                spacing={{ base: '5', lg: '8' }}
                justify="space-between"
            >
                <Box flexShrink={0}>
                    <Text fontSize="lg" fontWeight="medium">
                        Income to debt
                    </Text>
                    <Text color="muted" fontSize="sm">
                        Your finaincial number
                    </Text>
                </Box>
                <PersonalInfoCard maxW={{ lg: '3xl' }} />
            </Stack>

            <Stack
                direction={{ base: 'column', lg: 'row' }}
                spacing={{ base: '5', lg: '8' }}
                justify="space-between"
            >
                <Box flexShrink={0}>
                    <Text fontSize="lg" fontWeight="medium">
                        Your Profile
                    </Text>
                    <Text color="muted" fontSize="sm">
                        Tell others who you are
                    </Text>
                </Box>
                <ProfileCard maxW={{ lg: '3xl' }} />
            </Stack>
        </Stack>
    </Container>
)

export default App