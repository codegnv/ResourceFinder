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
      fontWeight: 700,
      minWidth: '220px',
      padding: '14px',
    },
    secondary: {
      background: theme.colors.secondary,
      border: 'none',
      color: theme.colors.baseLight,
      fontWeight: 700,
      minWidth: '220px',
      padding: '14px',
    },
    text: {
      background: 'transparent',
      border: 'none',
      color: theme.colors.primary,
      fontWeight: 700,
      minWidth: 'unset',
      padding: '0',
    },
    arrowText: {
      background: 'transparent',
      border: 'none',
      color: theme.colors.primary,
      fontWeight: 800,
      minWidth: '260px',
      padding: '0',
    },
  }

  const style = styleByVariant[variant]

  return `
    align-items: ${variant === 'arrowText' ? 'center' : 'unset'};
    background: ${style.background};
    border: ${style.border};
    color: ${style.color};
    cursor: pointer;
    display: ${variant === 'arrowText' ? 'flex' : 'inline'};
    font-size: 13px;
    font-weight: 800;
    font-family: 'Inter';
    letter-spacing: 1.89px;
    min-width: ${style.minWidth};
    padding: ${style.padding};
    text-transform: uppercase;
    span {
      position: relative;
      display: inline-block;
      color: ${style.color};
      &:before {
        position: absolute;
        content: attr(data-content);
        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        text-decoration: underline;
        transition: clip-path 275ms ease;
      }
    }
    &:hover span:before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  `
})

function Button({ children, onClick, variant, ...rest }: IButtonProps) {
  const StyledIcon = styled(CgArrowLongRight)`
    font-size: 24px;
    margin-left: 8px;
  `

  return variant === 'arrowText' || variant === 'text' ? (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      <span data-content={children}>{children}</span>
      {variant === 'arrowText' && <StyledIcon />}
    </StyledButton>
  ) : (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
