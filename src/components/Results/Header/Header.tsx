import { MedHrLine } from '../../HrLine'

export interface IResultsHeaderProps {
  begin: number
  end: number
  total: number
}

function ResultsHeader({ begin, end, total }: IResultsHeaderProps) {
  return (
    <>
      <p>
        Showing{' '}
        <span style={{ fontWeight: 'bold' }}>
          {begin} - {end}
        </span>{' '}
        of <span style={{ fontWeight: 'bold' }}>{total.toLocaleString()}</span> results
      </p>
      <MedHrLine />
    </>
  )
}

export default ResultsHeader
