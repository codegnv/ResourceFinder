import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Checkboxes } from 'src/components/Checkboxes'
import { Categories } from '../Categories'
export interface IContentProps {
  label: string
  selected: boolean
}

const StyledContent = styled(motion.div)`
  width: 100%;
  min-height: 200px;
  background-color: ${props => props.theme.colors.ltGray};
  padding: 24px;
  position: absolute;
  z-index: 5;
`

export function Content({ label, selected }: IContentProps) {
  if (!selected) return null
  return (
    <StyledContent
      key={'contentTab'}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
    >
      {label === 'categories' && <Categories />}
      {label === 'departments' && <Checkboxes />}
    </StyledContent>
  )
}
