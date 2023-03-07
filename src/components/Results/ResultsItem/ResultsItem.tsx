import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { getNames } from '../../../utils/arrays'
import { SmHrLine } from '../../shared/HrLine'
import { IService } from '../types'
import { ItemAttribute, ItemRequirements } from './ItemAttribute'

interface IResultsItemProps
  extends Pick<IService, 'name' | 'criteria' | 'departments' | 'description' | 'programs' | 'has_age_requirement' | 'has_fee_requirement' | 'has_income_requirement'> {}

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

export function ResultsItem({ name, criteria, description, departments, programs, has_age_requirement, has_fee_requirement, has_income_requirement }: IResultsItemProps) {
  const { t } = useTranslation('common')

  return (
    <StyledArticle tabIndex={0}>
      <StyledHeader aria-label={`Service: ${name},`}>{name}</StyledHeader>
      <StyledDescription aria-label={`Description: ${description},`}>{description}</StyledDescription>
      <section>
        <ItemAttribute header={t('offeredBy')} items={getNames(departments)} />
        <ItemAttribute header={t('partOf')} items={getNames(programs)} />
        <ItemRequirements
          header={t('criteria')}
          has_age_requirement={has_age_requirement}
          has_fee_requirement={has_fee_requirement}
          has_income_requirement={has_income_requirement}
        />
      </section>
      <SmHrLine />
    </StyledArticle>
  )
}
