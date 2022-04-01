import { Box, Container, Stack } from '@chakra-ui/react'
import { ProviderItem } from './ProviderItem'
import { IProvider } from './types'

export interface Props {
  providers: IProvider[]
}

export default function ProviderList({ providers }: Props) {
  return (
    <Container maxW='xl'>
      <Stack as={Box} spacing={{ base: 8 }} py={{ base: 8 }}>
        {providers &&
          providers.map((provider: IProvider, i: number) => <ProviderItem key={i} provider={provider} />)}
      </Stack>
    </Container>
  )
}
