import styled from '@emotion/styled'

export interface IHrLineProps {
  height: HrHeight | number,
}

enum HrHeight {
  SmHeight = 1,
  MedHeight = 3,
  LgHeight = 5,
}

const StyledSecondaryHrLine = styled.hr<IHrLineProps>`
  border: none;
  height: ${props => props.height.toString()}px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.secondary};
`

const StyledBaseHrLine = styled.hr<IHrLineProps>`
  border: none;
  height: ${props => props.height.toString()}px;
  color: ${props => props.theme.colors.base};
  background-color: ${props => props.theme.colors.base};
`

const StyledBaseLightHrLine = styled.hr<IHrLineProps>`
  border: none;
  height: ${props => props.height.toString()}px;
  color: ${props => props.theme.colors.baseLight};
  background-color: ${props => props.theme.colors.baseLight};
`


function HrLine({ height = 1 }: IHrLineProps) {
  return <StyledSecondaryHrLine height={height} />
}

function SmHrLine() {
  return <StyledSecondaryHrLine height={HrHeight.SmHeight} />
}

function MedHrLine() {
  return <StyledSecondaryHrLine height={HrHeight.MedHeight} />
}

function LgHrLine() {
  return <StyledSecondaryHrLine height={HrHeight.LgHeight} />
}

function SmBaseHrLine() {
  return <StyledBaseHrLine height={HrHeight.SmHeight} />
}

function SmBaseLightHrLine() {
  return <StyledBaseLightHrLine height={HrHeight.SmHeight} />
}

export { HrLine, SmHrLine, MedHrLine, LgHrLine, SmBaseHrLine, SmBaseLightHrLine }
