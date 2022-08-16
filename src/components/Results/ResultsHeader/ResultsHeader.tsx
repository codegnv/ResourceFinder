import { MedHrLine } from '../../shared/HrLine'

export interface IResultsHeaderProps {
  begin: number
  end: number
  total: number
}

export function ResultsHeader({ begin, end, total }: IResultsHeaderProps) {
  return (
    <>
      Showing{' '}
      <span style={{ fontWeight: 'bold' }}>
        {begin} - {end}
      </span>{' '}
      of <span style={{ fontWeight: 'bold' }}>{total.toLocaleString()}</span> results
      <MedHrLine />
    </>
  )
}
