import styled from '@emotion/styled'

export interface IContentHeaderProps {}

const StyledContentHeader = styled.div`
  margin-bottom: 20px;
`
function ContentHeader({}: IContentHeaderProps) {
  return <StyledContentHeader></StyledContentHeader>
}
export default ContentHeader
