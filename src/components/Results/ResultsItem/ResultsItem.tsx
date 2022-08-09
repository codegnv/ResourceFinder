import styled from '@emotion/styled'
import React from 'react'
import { dedupeArray } from '../../../utils/arrays'
import { SmHrLine } from '../../shared/HrLine'

export interface IResultsItemProps {
  name: string
  criteria?: Array<string>
  description: string
  departments: Array<any>
  programs: Array<any>
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

function ResultsItem({ name, criteria, description, departments, programs }: IResultsItemProps) {
  const departmentNames = departments.map((department: any) => department.name)
  const departmentsList = (
    <div>
      {dedupeArray(departmentNames).map(departmentNames => (
        <div key={departmentNames}>{departmentNames}</div>
      ))}
    </div>
  )

  const programNames = programs.map((program: any) => program.name)
  const programsList = (
    <div>
      {dedupeArray(programNames).map(programNames => (
        <div key={programNames}>{programNames}</div>
      ))}
    </div>
  )

  const criteriaList = (
    <div>{criteria && criteria.map(criteriaName => <div key={criteriaName}>{criteriaName}</div>)}</div>
  )

  return (
    <section>
      <StyledHeader>{name}</StyledHeader>
      <StyledDescription>{description}</StyledDescription>
      <StyledAttributes>
        <StyledAttibuteHeader>Offered by: </StyledAttibuteHeader> {departmentsList}
        <StyledAttibuteHeader>Part of: </StyledAttibuteHeader> {programsList}
        {criteria && (
          <>
            <StyledAttibuteHeader>Criteria: </StyledAttibuteHeader> {criteriaList}
          </>
        )}
      </StyledAttributes>
      <SmHrLine />
    </section>
  )
}

export default ResultsItem
