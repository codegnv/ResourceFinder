import styled from '@emotion/styled'
import Button from '../../Button'

export interface IContentHeaderProps {
  count: number
  onClear: () => void
}

const StyledContentHeader = styled.div`
  margin-bottom: 25px;
`
const StyledInfoAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

function ContentHeader({ count, onClear }: IContentHeaderProps) {
  return (
    <StyledContentHeader>
      <StyledInfoAndButton>
        {count} items selected
        <Button onclick={onClear} variant='secondary'>
          Clear Filters
        </Button>
      </StyledInfoAndButton>
      <hr />
    </StyledContentHeader>
  )
}
export default ContentHeader
