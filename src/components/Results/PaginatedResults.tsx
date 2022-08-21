import styled from '@emotion/styled'
import React from 'react'
import ReactPaginate from 'react-paginate'
import { ResultsHeader } from './ResultsHeader'
import { ResultsItem } from './ResultsItem'
import { IServices } from './types'

interface IPaginatedResultsProps {
  data: Array<IServices>
  itemsPerPage?: number
}

const StyledReactPaginate = styled(ReactPaginate)`
  color: ${props => props.theme.colors.baseDark};
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding-inline-start: 0;
  li a {
    padding: 0 4px;
    cursor: pointer;
  }
  li.active a {
    font-weight: 800;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`

export function PaginatedResults({ itemsPerPage = 10, data }: IPaginatedResultsProps) {
  const [currentItems, setCurrentItems] = React.useState(data)
  const [pageCount, setPageCount] = React.useState(0)
  const [itemOffset, setItemOffset] = React.useState(0)

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  React.useEffect(() => {
    setItemOffset(0)
  }, [data])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const ResultsItems = currentItems.map(item => (
    <ResultsItem
      name={item.name}
      criteria={item.criteria}
      description={
        item.description ||
        'Lorem ipsum ut eu non esse laboris sint exercitation commodo consectetur dolor ipsum. Fugiat ut ea ea excepteur exercitation. Proident excepteur incididunt irure cillum sit laboris sit deserunt et cillum officia sit excepteur.'
      }
      programs={item.programs}
      departments={item.departments}
      key={item.name}
    />
  ))

  return (
    <>
      <ResultsHeader
        begin={itemOffset + 1}
        end={
          data.length > itemsPerPage
            ? itemOffset + itemsPerPage < data.length
              ? itemOffset + itemsPerPage
              : data.length
            : data.length
        }
        total={data.length}
      />
      {ResultsItems}
      {data.length > itemsPerPage && (
        <StyledReactPaginate
          activeClassName='active'
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel='<'
        />
      )}
    </>
  )
}
