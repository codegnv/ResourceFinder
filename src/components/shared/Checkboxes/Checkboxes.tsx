import styled from '@emotion/styled'
import { ICheckbox } from 'src/components/Results/types'
import { Checkbox } from './Checkbox'

const StyledCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

interface ICheckboxesProps {
  selectedItems: Array<string>
  items: Array<ICheckbox>
  onChange: (value: string, id: string | number) => void
}

export function Checkboxes({ selectedItems, items, onChange }: ICheckboxesProps) {
  return (
    <StyledCheckboxes>
      {items.map(checkbox => (
        <Checkbox
          key={checkbox.id}
          checkbox={checkbox}
          selected={selectedItems.includes(checkbox.name) || selectedItems.includes(checkbox.id as string)}
          onChange={onChange}
        />
      ))}
    </StyledCheckboxes>
  )
}
