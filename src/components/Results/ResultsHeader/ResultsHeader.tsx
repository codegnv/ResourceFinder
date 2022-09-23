import { MedHrLine } from '../../shared/HrLine'
import styled from '@emotion/styled'
import { Button } from 'src/components/shared/Button'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

export interface IResultsHeaderProps {
  begin: number
  end: number
  total: number
  clearAllFilters: any
  filtersApplied: boolean
}

export function ResultsHeader({ begin, end, total, clearAllFilters, filtersApplied }: IResultsHeaderProps) {
  const { t } = useTranslation('common')

  const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `
  return (
    <>
      <StyledWrapper>
        <div>
          Showing{' '}
          <span style={{ fontWeight: 'bold' }}>
            {begin} - {end}
          </span>{' '}
          of <span style={{ fontWeight: 'bold' }}>{total.toLocaleString()}</span> results
        </div>
        {filtersApplied === true ? (
          <Button variant='text' onClick={clearAllFilters}>
            {t('clearAllFilters')}
          </Button>
        ) : null}
      </StyledWrapper>
      <MedHrLine />
    </>
  )
}
