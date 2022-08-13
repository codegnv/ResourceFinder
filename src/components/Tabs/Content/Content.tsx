import styled from '@emotion/styled'
import { Categories } from '../Categories'
import { Checkboxes } from 'src/components/Checkboxes'
export interface IContentProps {
  label: string
  selected: boolean
}

const StyledContent = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${props => props.theme.colors.ltGray};
  padding: 24px;
  position: absolute;
`

export function Content({ label, selected }: IContentProps) {
  if (!selected) return null
  return (
    <StyledContent>
      {label === 'categories' && <Categories />}
      {label === 'departments' && <Checkboxes />}
    </StyledContent>
  )
}
