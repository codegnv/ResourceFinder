import { useMediaQuery } from 'react-responsive'
import { SCREEN_BREAKPOINT } from '../../../constants'

export function useScreenSize() {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${SCREEN_BREAKPOINT.DESKTOP}px)`,
  })

  const isTablet = useMediaQuery({
    query: `(min-width: ${SCREEN_BREAKPOINT.TABLET}px)`,
  })

  switch (true) {
    case isDesktop:
      return 'desktop'
    case isTablet:
      return 'tablet'
    default:
      return 'mobile'
  }
}
