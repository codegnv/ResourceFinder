import styled from '@emotion/styled'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { ITag } from 'src/components/Results/types'

export interface ITagProps {
  selected: boolean
  tag: ITag
  onClick: (value: string) => void
}

const StyledTag = styled.button<Pick<ITagProps, 'selected'>>`
  background-color: ${props =>
    props.selected ? props.theme.colors.secondary : props.theme.colors.baseLight};
  box-shadow: ${props => (props.selected ? '0px 3px 10px #00000029;' : undefined)};
  border: 1px solid ${props => (props.selected ? props.theme.colors.secondary : '#c6cace')};
  border-radius: 5px;
  display: inline-flex;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 17px;
  font-family: Inter;
  line-height: 17px;
`
const StyledLabel = styled.span`
  margin-right: 4px;
`

export function Tag({ tag, selected, onClick }: ITagProps) {
  return (
    <StyledTag onClick={() => onClick(tag.name)} selected={selected}>
      <StyledLabel>{tag.name}</StyledLabel>
      {selected ? <AiOutlineClose /> : <AiOutlinePlus />}
    </StyledTag>
  )
}
