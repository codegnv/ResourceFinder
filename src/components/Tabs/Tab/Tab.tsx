import styled from '@emotion/styled'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export interface ITabProps {
  label: string
  fullWidth?: boolean
  onClick: () => void
  selected: boolean
}

const StyledTab = styled.button<Pick<ITabProps, 'fullWidth' | 'selected'>>`
  height: 36px;
  &:first-of-type {
    border-left: 0.5px solid ${props => props.theme.colors.gray};
  }
  border-top: 0.5px solid ${props => props.theme.colors.gray};
  border-bottom: 0.5px solid ${props => props.theme.colors.gray};
  border-right: 0.5px solid ${props => props.theme.colors.gray};
  border-left: 0.5px solid transparent;
  padding: 10px 8px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  flex-grow: ${props => (props.fullWidth ? '1' : undefined)};
  color: ${props => (props.selected ? props.theme.colors.baseLight : props.theme.colors.base)};
  background-color: ${props => (props.selected ? props.theme.colors.primary : props.theme.colors.ltGray)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  max-width: 50%;

  && svg {
    margin-bottom: -2px;
  }
`
const StyledLabel = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: center;
  padding-left: 14px;
`

function Tab({ label, fullWidth, selected, onClick }: ITabProps) {
  return (
    <>
      <StyledTab fullWidth={fullWidth} onClick={onClick} selected={selected}>
        <StyledLabel>{label}</StyledLabel>
        {selected ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </StyledTab>
    </>
  )
}
export default Tab
