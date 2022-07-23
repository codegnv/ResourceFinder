import styled from '@emotion/styled'

export interface IHrLineProps {
  height: string
}

const smHeight = "1";
const medHeight = "3";
const LgHeight = "5";

const StyledHrLine = styled.hr<IHrLineProps>`
  border: none;
  height: ${props => (props.height)}px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.secondary};
`

function HrLine({ height }: IHrLineProps) {
  return (
    <StyledHrLine height={height} />
  )
}

function SmHrLine() {
    return (
        <StyledHrLine height={smHeight} />
    )
}

function MedHrLine() {
  return (
      <StyledHrLine height={medHeight} />
  )
}

function LgHrLine() {
  return (
      <StyledHrLine height={LgHeight} />
  )
}

export {HrLine, SmHrLine, MedHrLine, LgHrLine}
