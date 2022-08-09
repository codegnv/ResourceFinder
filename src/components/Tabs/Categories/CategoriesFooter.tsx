import styled from '@emotion/styled'
import Button from '../../shared/Button'

export interface ICategoriesProps {}

const StyledCategories = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
//TODO: Tabs needs to move from context to redux to get action to button

function Categories({}: ICategoriesProps) {
  return (
    <>
      <hr />
      <StyledCategories>
        <Button>See Results</Button>
      </StyledCategories>
    </>
  )
}
export default Categories
