import styled from '@emotion/styled'
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
  padding: 20px;
  position: absolute;
`
function Content({ label, selected }: IContentProps) {
  if (!selected) return null
  return (
    <StyledContent>
      <ContentHeader />
      {label}
      <ContentFooter />
    </StyledContent>
  )
}
export default Content
