import styled from '@emotion/styled'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

export interface ITagProps {
  label: string
  selected: boolean
  onClick: (value: string) => void
}

const StyledTag = styled.button<Pick<ITagProps, 'selected'>>`
  background-color: ${props => (props.selected ? props.theme.colors.secondary : props.theme.colors.ltGray)};
  box-shadow: ${props => (props.selected ? '0px 3px 10px #00000029;' : undefined)};
  border: 1px solid #c6cace;
  border-radius: 5px;
  display: inline-flex;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`
const StyledLabel = styled.span`
  margin-right: 4px;
`

function Tag({ label, selected, onClick }: ITagProps) {
  return (
    <StyledTag onClick={() => onClick(label)} selected={selected}>
      <StyledLabel>{label}</StyledLabel>
      {selected ? <AiOutlineClose /> : <AiOutlinePlus />}
    </StyledTag>
  )
}
export default Tag
