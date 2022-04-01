import { ChevronDownIcon } from '@chakra-ui/icons'
import { Collapse, Flex, Icon, Link, Stack, Text, useDisclosure } from '@chakra-ui/react'
import NavLink from 'next/link'
import { NAV_ITEMS } from './constants'
import { NavItem } from './types'

export const MobileNav = () => {
  return (
    <Stack bg='white' p='4' display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing='4' onClick={children && onToggle}>
      <Flex
        as={NavLink}
        href={href ?? '#'}
        py='2'
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight='600' color='gray.600'>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w='6'
            h='6'
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt='2' pl='4' borderLeft='1' borderStyle='solid' borderColor='gray.200' align='-moz-initial'>
          {children &&
            children.map((child, i) => (
              <Link as={NavLink} href={child.href ?? '#'} key={i} py='2'>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
