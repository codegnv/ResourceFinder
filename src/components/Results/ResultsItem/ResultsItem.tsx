import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { getNames } from '../../../utils/arrays'
import { SmHrLine } from '../../shared/HrLine'
import { IService } from '../types'
import { ItemAttribute } from './ItemAttribute'

interface IResultsItemProps
  extends Pick<IService, 'name' | 'criteria' | 'departments' | 'description' | 'programs'> {}

const StyledArticle = styled.article`
  outline: none;
`

const StyledHeader = styled.h2`
  margin-bottom: 12px;
`

const StyledDescription = styled.p`
  margin-bottom: 12px;
  outline: none;
`
export function ResultsItem({ name, criteria, description, departments, programs }: IResultsItemProps) {
  const { t } = useTranslation('common')

  return (
    <StyledArticle tabIndex={0}>
      <StyledHeader aria-label={`Service: ${name},`}>{name}</StyledHeader>
      <StyledDescription aria-label={`Description: ${description},`}>{description}</StyledDescription>
      <section>
        <ItemAttribute header={t('offeredBy')} items={getNames(departments)} />
        <ItemAttribute header={t('partOf')} items={getNames(programs)} />
        <ItemAttribute header={t('criteria')} items={getNames(criteria)} />
      </section>
      <SmHrLine />
    </StyledArticle>
  )
}
