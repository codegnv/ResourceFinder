import { Box, chakra, Flex, Stack } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { IPhoneNumber, IProvider } from '../ProviderList/types'

export interface Props {
  provider: IProvider
}

export default function ProviderCard({ provider }: Props) {
  const { t } = useTranslation('common')

  return (
    <Flex p='20' w='auto' justifyContent='center' alignItems='center'>
      <Box py='12' bg='white' rounded='xl'>
        <Box maxW='7xl' mx='auto' px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: 'center' }}>
            <chakra.p
              mt='2'
              fontSize={{ base: '3xl', sm: '4xl' }}
              lineHeight='8'
              fontWeight='extrabold'
              letterSpacing='tight'
            >
              {provider.name}
            </chakra.p>
            <chakra.p mt='4' maxW='2xl' fontSize='xl' mx={{ lg: 'auto' }} color={'text.secondary'}>
              {provider.services_provided}
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: 'grid' }}
              gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Box ml='4'>
                <Box fontSize='lg' fontWeight='medium' lineHeight='6'>
                  {t('locationAndContact')}
                </Box>
                <Box mt='2' color={'text.secondary'}>
                  {t('location')}: <br />
                  <Box px='4'>{provider.addresses[0].line_1}</Box>
                </Box>
                <Box color={'text.secondary'}>{`${t('busRoutes')}: ${provider.bus_routes}`}</Box>
                <Box mt='2' color={'text.secondary'}>
                  {t('phoneNumbers')}: <br />
                  <Flex>
                    {provider.phone_numbers.map((p, i) => (
                      <Box key={i} px='4'>
                        <Box>{p.number}</Box>
                        <Box>{p.contact}</Box>
                      </Box>
                    ))}
                  </Flex>
                </Box>
                <Box mt='2' color={'text.secondary'}>
                  {t('email')}: <br />
                  <Flex>
                    {provider.email.map((emailAddress: string, i: number) => (
                      <Box key={i} px='4'>
                        {emailAddress}
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Box>
              <Box ml='4'>
                <Box fontSize='lg' fontWeight='medium' lineHeight='6'>
                  {t('languageTranslationoffered')}:
                </Box>
                <Box mt='2' color={'text.secondary'}>
                  {t('location')}: <br />
                  <Box px='4'>{provider.addresses[0].line_1}</Box>
                </Box>
                <Box color={'text.secondary'}>{`${t('busRoutes')}: ${provider.bus_routes}`}</Box>
                <Box mt='2' color={'text.secondary'}>
                  {t('phoneNumbers')}: <br />
                  <Flex>
                    {provider.phone_numbers.map((p: IPhoneNumber, i: number) => (
                      <Box key={i} px='4'>
                        <Box>{p.number}</Box>
                        <Box>{p.contact}</Box>
                      </Box>
                    ))}
                  </Flex>
                </Box>
                <Box mt='2' color={'text.secondary'}>
                  {t('email')}: <br />
                  <Flex>
                    {provider.email.map((e: string, i: number) => (
                      <Box key={i} px='4'>
                        {e}
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
