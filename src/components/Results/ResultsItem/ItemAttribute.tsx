import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
interface IItemAttributeProps {
  header: string
  items?: Array<string> | undefined
}

interface IItemRequirementProps {
  header: string
  items?: Array<string> | undefined
  has_age_requirement: boolean
  has_fee_requirement: boolean
  has_income_requirement: boolean
}

const StyledAttibuteHeader = styled.span`
  font-weight: 700;
  outline: none;
`
const StyledAttribute = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  margin: 8px 0;
  outline: none;
`

function ItemAttribute({ header, items }: IItemAttributeProps) {
  if (!items?.length) return null

  return (
    <StyledAttribute aria-label={`${header}: ${items.map(item => item + ', ')}`}>
      <ul>
        <li>
          <StyledAttibuteHeader>{`${header}`}</StyledAttibuteHeader>
        </li>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </StyledAttribute>
  )
}

const StyledRequirements = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  margin: 8px 0;
  outline: none;
`

function ItemRequirements({ header, has_age_requirement, has_fee_requirement, has_income_requirement }: IItemRequirementProps) {
  const { t } = useTranslation('common')

  if (!has_age_requirement && !has_fee_requirement && !has_income_requirement) return null

  var requirements = [];
  if (has_age_requirement) {
    requirements.push(t('criteriaAge'))
  }
  if (has_fee_requirement) {
    requirements.push(t('criteriaFee'))
  }
  if (has_income_requirement) {
    requirements.push(t('criteriaIncome'))
  }

  return (
    <StyledAttribute aria-label={`${header}: ${requirements.map(req => req + ', ')}`}>
      <ul>
        <li>
          <StyledAttibuteHeader>{`${header}`}</StyledAttibuteHeader>
        </li>
        {requirements.map(req => (
          <li key={req}>{req}</li>
        ))}
      </ul>
    </StyledAttribute>
  )
}

export {ItemAttribute, ItemRequirements}