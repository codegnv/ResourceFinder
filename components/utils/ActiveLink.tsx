import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode
  to: string
  activeProps?: LinkProps
}

function NavLink({ to, activeProps, children, ...props }: NavLinkProps) {
  const router = useRouter()
  const isActive = router.pathname === to
  const linkColor = 'white'
  const linkHoverColor = 'brand.secondary'
  const activePageColor = 'brand.secondary'

  if (isActive) {
    return (
      <Link href={to} passHref>
        <ChakraLink
          fontSize={'sm'}
          fontWeight='semibold'
          borderBottom='solid 2px'
          borderBottomColor={activePageColor}
          color={activePageColor}
          {...props}
          {...activeProps}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
          _focus={{}}
        >
          {children}
        </ChakraLink>
      </Link>
    )
  }

  return (
    <Link href={to} passHref>
      <ChakraLink
        {...props}
        fontSize={'sm'}
        fontWeight='semibold'
        color={linkColor}
        _hover={{ textDecoration: 'none', color: linkHoverColor }}
        _focus={{}}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}

export default NavLink
