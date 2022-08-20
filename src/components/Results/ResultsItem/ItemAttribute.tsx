import styled from '@emotion/styled'

interface IItemAttributeProps {
  header: string
  items?: Array<string> | undefined
}

const StyledAttibuteHeader = styled.span`
  font-weight: 700;
  outline: none;
`
const StyledAttribute = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin: 8px 0;
  outline: none;
`

export function ItemAttribute({ header, items }: IItemAttributeProps) {
  if (!items?.length) return null

  return (
    <StyledAttribute tabIndex={0} aria-label={`${header}: ${items.map(item => item + ', ')}`}>
      <StyledAttibuteHeader>{`${header}: `}</StyledAttibuteHeader>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </StyledAttribute>
  )
}
