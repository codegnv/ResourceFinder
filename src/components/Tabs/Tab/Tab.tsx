import styled from '@emotion/styled'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

export interface ITabProps {
  label: string
  fullWidth?: boolean
  onClick: () => void
  selected: boolean
}

const StyledTab = styled.button<Pick<ITabProps, 'fullWidth' | 'selected'>>`
  height: 36px;
  border: 0.5px solid ${props => props.theme.colors.gray};
  padding: 10px 12px;
  font-size: 14px;
  flex-grow: ${props => (props.fullWidth ? '1' : undefined)};
  color: ${props => (props.selected ? props.theme.colors.baseLight : props.theme.colors.base)};
  background-color: ${props => (props.selected ? props.theme.colors.primary : props.theme.colors.ltGray)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  &:active,
  &:hover {
    filter: brightness(85%);
  }
`
const StyledLabel = styled.span`
  margin-right: 8px;
  display: flex;
`

function Tab({ label, fullWidth, selected, onClick }: ITabProps) {
  return (
    <>
      <StyledTab fullWidth={fullWidth} onClick={onClick} selected={selected}>
        <StyledLabel>{label}</StyledLabel>
        {selected ? <AiOutlineUp /> : <AiOutlineDown />}
      </StyledTab>
    </>
  )
}
export default Tab
