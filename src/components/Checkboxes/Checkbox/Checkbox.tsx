import styled from '@emotion/styled'
import { GrClose } from 'react-icons/gr'

export interface ICheckboxProps {
  checkbox: {
    id: number
    name: string
  }
  selected: boolean
  onClick: (value: string) => void
}

const StyledCheckbox = styled.button<Pick<ICheckboxProps, 'selected'>>`
  border: hidden;
  background-color: ${props => props.theme.colors.ltGray};
  border-radius: 5px;
  display: inline-flex;
  padding: 8px;
  justify-content: left;
  align-items: top;
  flex-direction: row;
  cursor: pointer;
`
const StyledLabel = styled.span`
  margin-left: 12px;
  display: flex;
  text-align: left;
  font: normal normal normal 18px Pontano Sans;
`

// Add the border color later in theme
const StyledBox = styled.div<Pick<ICheckboxProps, 'selected'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${props => (props.selected ? props.theme.colors.secondary : 'white')};
  border: ${props => (props.selected ? 'none' : `#8D9297 1pt solid`)}; ;
`

export function Checkbox({ checkbox: { name }, selected, onClick }: ICheckboxProps) {
  return (
    <StyledCheckbox onClick={() => onClick(name)} selected={selected}>
      <StyledBox selected={selected}>{selected && <GrClose size='17px' />}</StyledBox>
      <StyledLabel>{name}</StyledLabel>
    </StyledCheckbox>
  )
}
