import { Box, Stack } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import NavLink from '../utils/ActiveLink'
import { NAV_ITEMS } from './constants'

export const DesktopNav = () => {
  return (
    <Stack direction='row' spacing='4' alignItems='baseline'>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <NavLink to={navItem.href ?? '#'}>{navItem.label}</NavLink>
        </Box>
      ))}
      <FaSearch />
    </Stack>
  )
}
