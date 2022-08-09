import styled from '@emotion/styled'
import React from 'react'

export interface IButtonProps {
  children?: React.ReactNode
  variant: 'primary' | 'secondary' | 'text'
  [x: string]: any
}

const StyledButton = styled.button<Pick<IButtonProps, variant>>(({ variant }) => {
  //
  return `
  background: red;
`
})

function Button({ children, variant }: IButtonProps) {
  return <StyledButton variant={variant}>{children}</StyledButton>
}

export default Button
