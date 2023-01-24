import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const PersonalInfoCard = (props: BoxProps) => (
  <Box
    as="form"
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  >
    <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
      <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
        <FormControl id="income">
          <FormLabel> Income</FormLabel>
          <Input defaultValue="4000" />
        </FormControl>
        <FormControl id="debt">
          <FormLabel>debt</FormLabel>
          <Input defaultValue="40000" />
        </FormControl>
      </Stack>
      <FormControl id="interest_rate">
        <FormLabel>Interest Rate</FormLabel>
        <Input defaultValue="Am Kreuzberg 3" />
      </FormControl>
      <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
        <FormControl id="monthly_expenses ">
          <FormLabel>Expenses</FormLabel>
          <Input defaultValue="Berlin" />
        </FormControl>
        <FormControl id="desired_payoff">
          <FormLabel>Desired time to payoff</FormLabel>
          <Input />
        </FormControl>
        <FormControl id="zip">
          <FormLabel>ZIP/ Postal Code</FormLabel>
          <Input defaultValue="10961" />
        </FormControl>
      </Stack>
    </Stack>
    <Divider />
    <Flex direction="row-reverse" py="4" px={{ base: '4', md: '6' }}>
      <Button type="submit" variant="primary">
        Save
      </Button>
    </Flex>
  </Box>
)
