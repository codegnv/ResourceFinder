import styled from '@emotion/styled'

export interface IContentProps {
  label: string
  selected: boolean
}

const StyledContent = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${props => props.theme.colors.ltGray};
  padding: 20px;
`
function Content({ label, selected }: IContentProps) {
  if (!selected) return null
  return <StyledContent>{label}</StyledContent>
}
export default Content
