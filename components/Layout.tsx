import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Box as='main' pt='50px' bg='#F9FAFB' minH='100vh'>
        {children}
      </Box>
    </>
  )
}
