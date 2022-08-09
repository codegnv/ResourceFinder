import styled from '@emotion/styled'
import Button from '../../shared/Button'

export interface ICategoriesHeaderProps {
  count: number
  onClear: () => void
}

const StyledCategoriesHeader = styled.div`
  margin-bottom: 25px;
`
const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

function CategoriesHeader({ count, onClear }: ICategoriesHeaderProps) {
  return (
    <StyledCategoriesHeader>
      <StyledRow>
        {count} items selected
        <Button onClick={onClear} variant='text'>
          Clear Filters
        </Button>
      </StyledRow>
      <hr />
    </StyledCategoriesHeader>
  )
}
export default CategoriesHeader
