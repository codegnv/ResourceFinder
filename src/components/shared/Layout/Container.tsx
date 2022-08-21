import styled from '@emotion/styled'
import { MAX_CONTAINER_WIDTH } from '../../../constants'

interface IContainerProps extends React.ComponentProps<'div'> {
  maxWidth?: number
  // TODO: Fix this
  backgroundColor?: string
}

export function Container({
  backgroundColor,
  children,
  maxWidth = MAX_CONTAINER_WIDTH.DESKTOP,
}: IContainerProps) {
  const StyledOuterWrapper = styled.div<Pick<IContainerProps, 'backgroundColor'>>`
    background-color: ${props => props.backgroundColor ?? 'unset'};
    width: 100%;
  `
  const StyledInnerWrapper = styled.div<Pick<IContainerProps, 'maxWidth'>>`
    width: 100%;
    max-width: ${props => props.maxWidth}px;
    margin: auto;
    padding: 0 20px;
  `

  return (
    <StyledOuterWrapper backgroundColor={backgroundColor}>
      <StyledInnerWrapper maxWidth={maxWidth}>{children}</StyledInnerWrapper>
    </StyledOuterWrapper>
  )
}
