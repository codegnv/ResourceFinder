import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { getNames } from '../../../utils/arrays'
import { Button } from '../../shared/Button'
import { SmHrLine } from '../../shared/HrLine'
import { IService } from '../types'
import { ItemAttribute } from './ItemAttribute'
import { ItemRequirements } from './ItemRequirements'

interface IResultsItemProps
  extends Pick<
    IService,
    | 'name'
    | 'criteria'
    | 'departments'
    | 'description'
    | 'has_age_requirement'
    | 'has_fee_requirement'
    | 'has_income_requirement'
    | 'link'
    | 'programs'
  > {}

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
const StyledButton = styled(Button)`
  margin-top: 35px;
`

export function ResultsItem({
  criteria,
  departments,
  description,
  has_age_requirement,
  has_fee_requirement,
  has_income_requirement,
  link,
  name,
  programs,
}: IResultsItemProps) {
  const { t } = useTranslation('common')

  return (
    <StyledArticle tabIndex={0}>
      <StyledHeader aria-label={`Service: ${name},`}>{name}</StyledHeader>
      {description && (
        <StyledDescription aria-label={`Description: ${description},`}>{description}</StyledDescription>
      )}
      <section>
        <ItemAttribute header={t('offeredBy')} items={getNames(departments)} />
        <ItemAttribute header={t('partOf')} items={getNames(programs)} />
        <ItemAttribute header={t('criteria')} items={getNames(criteria)} />
        <ItemRequirements
          header={t('criteria')}
          has_age_requirement={has_age_requirement}
          has_fee_requirement={has_fee_requirement}
          has_income_requirement={has_income_requirement}
        />
      </section>
      <StyledButton variant='arrowText' onClick={() => window.open(link, '_blank')}>
        {t('getMoreInfo')}
      </StyledButton>
      <SmHrLine />
    </StyledArticle>
  )
}
