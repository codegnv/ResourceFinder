import styled from '@emotion/styled'
import { GrClose } from 'react-icons/gr'
import { ICheckbox } from 'src/components/Results/types'

export interface ICheckboxProps {
  checkbox: ICheckbox
  selected: boolean
  onChange: (value: string) => void
}

const StyledCheckboxItem = styled.div`
  position: relative;
`
const StyledLabel = styled.label`
  margin-left: 36px;
  font: normal normal normal 18px Pontano Sans;
`

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`
const StyledCheckbox = styled.span<Pick<ICheckboxProps, 'selected'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: ${props => (props.selected ? props.theme.colors.secondary : 'white')};
  border: ${props =>
    props.selected ? `${props.theme.colors.secondary} 1pt solid` : `${props.theme.colors.gray} 1pt solid`};
`

export function Checkbox({ checkbox: { name }, selected, onChange }: ICheckboxProps) {
  return (
    <StyledCheckboxItem>
      <StyledLabel>
        <StyledInput type='checkbox' checked={selected} onChange={() => onChange(name)} />
        <StyledCheckbox selected={selected}>{selected && <GrClose size='17px' />}</StyledCheckbox>
        {name}
      </StyledLabel>
    </StyledCheckboxItem>
  )
}
