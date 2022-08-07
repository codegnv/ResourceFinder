import styled from '@emotion/styled'

export interface IHrLineProps {
  height: HrHeight | number
}

enum HrHeight {
  SmHeight = 1,
  MedHeight = 3,
  LgHeight = 5,
}

const StyledHrLine = styled.hr<IHrLineProps>`
  border: none;
  height: ${props => props.height.toString()}px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.secondary};
`

function HrLine({ height = 1 }: IHrLineProps) {
  return <StyledHrLine height={height} />
}

function SmHrLine() {
  return <StyledHrLine height={HrHeight.SmHeight} />
}

function MedHrLine() {
  return <StyledHrLine height={HrHeight.MedHeight} />
}

function LgHrLine() {
  return <StyledHrLine height={HrHeight.LgHeight} />
}

export { HrLine, SmHrLine, MedHrLine, LgHrLine }
