import styled from '@emotion/styled'
import { ITag } from 'src/components/Results/types'
import { Tag } from './Tag'

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

export function Tags({ selectedTags, tags, onClick }: ICategoriesProps) {
  const ResultsItems = [...tags]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(tag => <Tag key={tag.id} tag={tag} selected={selectedTags.includes(tag.name)} onClick={onClick} />)

  return (
    <>
      <StyledCategories>{ResultsItems}</StyledCategories>
    </>
  )
}
