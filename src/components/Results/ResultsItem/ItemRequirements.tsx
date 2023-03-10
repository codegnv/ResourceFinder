import useTranslation from 'next-translate/useTranslation'
import { BsPerson, BsTicketPerforated } from 'react-icons/bs'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { StyledAttibuteHeader, StyledAttributeListItem, StyledAttributeWrapper } from './ItemAttribute.styled'
import React from 'react'
import { IService } from '../types'

interface IItemRequirementProps
  extends Pick<IService, 'has_age_requirement' | 'has_fee_requirement' | 'has_income_requirement'> {
  header: string
  has_age_requirement: boolean
  has_fee_requirement: boolean
  has_income_requirement: boolean
}

export function ItemRequirements({
  header,
  has_age_requirement,
  has_fee_requirement,
  has_income_requirement,
}: IItemRequirementProps) {
  const { t } = useTranslation('common')

  if (!has_age_requirement && !has_fee_requirement && !has_income_requirement) return null

  const requirements = []
  if (has_age_requirement) {
    requirements.push({ icon: <BsPerson size={20} />, text: t('criteriaAge') })
  }
  if (has_fee_requirement) {
    requirements.push({ icon: <BsTicketPerforated size={20} />, text: t('criteriaFee') })
  }
  if (has_income_requirement) {
    requirements.push({ icon: <RiMoneyDollarCircleLine size={20} />, text: t('criteriaIncome') })
  }

  return (
    <StyledAttributeWrapper aria-label={`${header} ${requirements.map(requirement => requirement.text)}`}>
      <StyledAttibuteHeader>{`${header}`}</StyledAttibuteHeader>
      <ul>
        {requirements.map(requirement => (
          <StyledAttributeListItem key={requirement.text}>
            {requirement.icon}
            {requirement.text}
          </StyledAttributeListItem>
        ))}
      </ul>
    </StyledAttributeWrapper>
  )
}
