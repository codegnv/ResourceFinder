import styled from '@emotion/styled'
import { GrCheckbox, GrClose } from 'react-icons/gr'

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
padding: 20px 10px;
justify-content: left;
align-items: center;
flex-direction: row;
overflow: hidden;
white-space: nowrap;
cursor: pointer;
`
const StyledLabel = styled.span`
  margin-left: 5px;
`

function Checkbox({ checkbox: { name }, selected, onClick }: ICheckboxProps) {
  return (
    <StyledCheckbox onClick={() => onClick(name)} selected={selected}>
      {selected ? <GrClose size='15px'/> : <GrCheckbox size='15px'/>}
      <StyledLabel>{name}</StyledLabel>
    </StyledCheckbox>
  )
}
export default Checkbox
