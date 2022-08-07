import styled from '@emotion/styled'
import React from 'react'
import { SmHrLine } from '../../HrLine'

export interface IItemProps {
  name: string
  criteria?: string[]
  description?: string
  department?: string
  program?: string
}

const StyledHeader = styled.h2`
  margin-bottom: 12px;
`

const StyledDescription = styled.p`
  margin-bottom: 12px;
`

const StyledAttributes = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  row-gap: 8px;
  margin-top: 22px;
`

const StyledAttibuteHeader = styled.span`
  font-weight: 700;
`

function Item(item: IItemProps) {
  return (
    <section>
      <StyledHeader>{item.name}</StyledHeader>
      <StyledDescription>{item.description}</StyledDescription>
      <StyledAttributes>
        <StyledAttibuteHeader>Offered by: </StyledAttibuteHeader> {item.department}
        <StyledAttibuteHeader>Part of: </StyledAttibuteHeader> {item.program}
        <StyledAttibuteHeader>Criteria: </StyledAttibuteHeader>
        {item.criteria?.map(criteria => (
          <p key={criteria}>criteria</p>
        ))}
      </StyledAttributes>
      <SmHrLine />
    </section>
  )
}

export default Item
