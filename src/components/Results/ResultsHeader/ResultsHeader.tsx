import { MedHrLine } from '../../shared/HrLine'
import styled from '@emotion/styled'
import { Button } from 'src/components/shared/Button'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

export interface IResultsHeaderProps {
  begin: number
  end: number
  total: number
  onClearFilters: any
}

export function ResultsHeader({ begin, end, total, onClearFilters }: IResultsHeaderProps) {
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
        <Button variant='text' onClick={onClearFilters}>
          {t('clearAllFilters')}
        </Button>
      </StyledWrapper>
      <MedHrLine />
    </>
  )
}
