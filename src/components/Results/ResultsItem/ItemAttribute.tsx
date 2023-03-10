import { StyledAttibuteHeader, StyledAttributeListItem, StyledAttributeWrapper } from './ItemAttribute.styled'

interface IItemAttributeProps {
  header: string
  items?: Array<string> | undefined
}

export function ItemAttribute({ header, items }: IItemAttributeProps) {
  if (!items?.length) return null

  return (
    <StyledAttributeWrapper aria-label={`${header} ${items.map(item => item + ', ')}`}>
      <StyledAttibuteHeader>{`${header}`}</StyledAttibuteHeader>
      <ul>
        {items.map(item => (
          <StyledAttributeListItem key={item}>{item}</StyledAttributeListItem>
        ))}
      </ul>
    </StyledAttributeWrapper>
  )
}
