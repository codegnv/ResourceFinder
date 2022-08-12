import styled from '@emotion/styled'
import Tag from './Tag'
import { ITag } from './Tag/Tag'

interface ICategoriesProps {
  selectedTags: Array<string>
  tags: Array<ITag>
  onClick: (value: string) => void
}

const StyledCategories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`

function Tags({ selectedTags, tags, onClick }: ICategoriesProps) {
  const ResultsItems = tags.map(tag => (
    <Tag key={tag.id} tag={tag} selected={selectedTags.includes(tag.name)} onClick={onClick} />
  ))

  return (
    <>
      <StyledCategories>{ResultsItems}</StyledCategories>
    </>
  )
}
export default Tags
