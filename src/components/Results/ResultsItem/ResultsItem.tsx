import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { getNames } from '../../../utils/arrays'
import { SmHrLine } from '../../shared/HrLine'
import { IServices } from '../types'
import { ItemAttribute } from './ItemAttribute'

interface IResultsItemProps
  extends Pick<IServices, 'name' | 'criteria' | 'departments' | 'description' | 'programs'> {}

const StyledHeader = styled.h2`
  margin-bottom: 12px;
  outline: none;
`

const StyledDescription = styled.p`
  margin-bottom: 12px;
  outline: none;
`
export function ResultsItem({ name, criteria, description, departments, programs }: IResultsItemProps) {
  const { t } = useTranslation('common')

  return (
    <article>
      <StyledHeader tabIndex={0} aria-label={`Service: ${name}`}>
        {name}
      </StyledHeader>
      <StyledDescription tabIndex={0} aria-label={`Description: ${description}`}>
        {description}
      </StyledDescription>
      <section>
        <ItemAttribute header={t('offeredBy')} items={getNames(departments)} />
        <ItemAttribute header={t('partOf')} items={getNames(programs)} />
        <ItemAttribute header={t('criteria')} items={getNames(criteria)} />
      </section>
      <SmHrLine />
    </article>
  )
}
