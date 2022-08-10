import styled from '@emotion/styled'
import { CgArrowLongRight } from 'react-icons/cg'

export interface IButtonProps {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'text' | 'arrowText'
  onClick?: () => void
}

const StyledButton = styled.button<Pick<IButtonProps, 'variant'>>(({ variant = 'primary', theme }) => {
  const styleByVariant = {
    primary: {
      background: theme.colors.primary,
      border: 'none',
      color: theme.colors.baseLight,
      minWidth: '220px',
      padding: '14px',
    },
    secondary: {
      background: theme.colors.secondary,
      border: 'none',
      color: theme.colors.baseLight,
      minWidth: '220px',
      padding: '14px',
    },
    text: {
      background: 'transparent',
      border: 'none',
      color: theme.colors.primary,
      minWidth: 'unset',
      padding: '0',
    },
    arrowText: {
      background: 'transparent',
      border: 'none',
      color: theme.colors.primary,
      minWidth: '260px',
      padding: '0',
    },
  }

  const style: any = styleByVariant[variant]

  return `
  background: ${style.background};
  border: ${style.border};
  text-transform: uppercase;
  color: ${style.color};
  font-size: 13px;
  font-weight: 700;
  font-family: 'Inter';
  padding: ${style.padding};
  min-width: ${style.minWidth};
  letter-spacing: 1.89px;
  cursor: pointer;
  display: ${variant === 'arrowText' ? 'flex' : 'inline'};
  align-items: ${variant === 'arrowText' ? 'center' : 'unset'};
`
})

function Button({ children, onClick, variant, ...rest }: IButtonProps) {
  const StyledIcon = styled(CgArrowLongRight)`
    margin-left: 8px;
    font-size: 24px;
  `
  return (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      {children}
      {variant === 'arrowText' && <StyledIcon />}
    </StyledButton>
  )
}

export default Button
