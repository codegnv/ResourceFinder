import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Spacer, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import { DesktopNav } from './DesktopNav'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg='brand.primary'
        color='white'
        minH='52px'
        py={{ base: 2 }}
        px={{ base: 4 }}
        align='center'
        position='fixed'
        w='100%'
        zIndex='2'
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant='ghost'
            aria-label='Toggle Navigation'
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href='/'>
            <a>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily='heading'
                fontWeight='bold'
                color='white'
              >
                myGNV Resource Finder
              </Text>
            </a>
          </Link>
          <Spacer />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
    </Box>
  )
}

export default Navbar
