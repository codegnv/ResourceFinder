import { Box, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { IProvider } from './types'

export interface props {
  provider: IProvider
}

export function ProviderItem({ provider }: props) {
  return (
    <>
      <Box
        maxW='lg'
        borderBottomWidth='1px'
        borderBottomStyle='solid'
        borderBottomColor='gray.300'
        p='4'
        mb='0'
      >
        <Box fontWeight='semibold' as='h4' isTruncated>
          <Link href={`providers/${provider._id}`}>{provider.name}</Link>
        </Box>
        {provider.addresses[0] && (
          <Box display='flex' alignItems='baseline'>
            <Icon as={FaMapMarkerAlt} mr={1} />
            {provider.addresses[0].line_1}
          </Box>
        )}
        {provider.hours?.monday && (
          <Box display='flex' alignItems='baseline'>
            <Icon as={FaClock} mr={1} />
            {provider.hours.monday}
          </Box>
        )}
        <Box display='flex' alignItems='baseline'>
          {provider.services_provided}
        </Box>
      </Box>
    </>
  )
}
