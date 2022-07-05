import styled from '@emotion/styled'
import React from 'react'
import Tag from './Tag'
import { ITagProps } from './Tag/Tag'

interface ITagsProps {
  tags?: Pick<ITagProps, 'label'>[]
}

const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 25px;
  max-height: 250px;
  overflow-x: scroll;
`

function Tags({ tags }: ITagsProps) {
  const [tempState, setTempState] = React.useState([''])

  const handleOnClick = (value: string) => {
    if (tempState.includes(value)) setTempState(tempState.filter(item => item !== value))
    else setTempState([...tempState, value])
  }

  return (
    <StyledTags>
      {tags?.map((tag, i) => (
        <Tag
          key={tag.label + i}
          label={tag.label}
          onClick={handleOnClick}
          selected={tempState.includes(tag.label)}
        />
      ))}
    </StyledTags>
  )
}
export default Tags
