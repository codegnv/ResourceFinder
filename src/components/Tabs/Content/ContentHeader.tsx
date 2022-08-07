import styled from '@emotion/styled'
import ResultsHeader from '../../Results/Header'

export interface IContentHeaderProps {}

const StyledContentHeader = styled.div`
  margin-bottom: 20px;
`
function ContentHeader({}: IContentHeaderProps) {
  return (
    <StyledContentHeader>
      <ResultsHeader begin={1} end={100} total={1000} />
    </StyledContentHeader>
  )
}
export default ContentHeader
