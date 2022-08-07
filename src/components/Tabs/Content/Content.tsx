//content
import styled from '@emotion/styled'
import Tags from '../../Tags'
import ContentFooter from './ContentFooter'
import ContentHeader from './ContentHeader'

export interface IContentProps {
  label: string
  selected: boolean
}

const StyledContent = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${props => props.theme.colors.ltGray};
  padding: 25px;
  position: absolute;
`

function Content({ label, selected }: IContentProps) {
  if (!selected) return null
  return (
    <StyledContent>
      <ContentHeader />
      {label === 'categories' && <Tags />}
      <ContentFooter />
    </StyledContent>
  )
}
export default Content
