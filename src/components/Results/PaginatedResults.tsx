import styled from '@emotion/styled'
import React from 'react'
import ReactPaginate from 'react-paginate'
import { ResultsHeader } from './ResultsHeader'
import { ResultsItem } from './ResultsItem'
import { IService } from './types'
import { useDispatch } from 'react-redux'
import { clearDepartmentsSelection } from 'src/components/Tabs/Content/Departments/departmentsSlice'
import { clearTagSelection } from 'src/components/Tabs/Content/Categories/categoriesSlice'
import { closeSearchbar, updateSearchText } from 'src/components/Header/Search/searchSlice'

interface IPaginatedResultsProps {
  data: Array<IService>
  services: Array<IService>
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

export function PaginatedResults({ itemsPerPage = 10, data, services }: IPaginatedResultsProps) {
  const [currentItems, setCurrentItems] = React.useState(data)
  const [pageCount, setPageCount] = React.useState(0)
  const [itemOffset, setItemOffset] = React.useState(0)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  React.useEffect(() => {
    setItemOffset(0)
  }, [data])

  const handleClearAllFilters = () => {
    dispatch(clearDepartmentsSelection())
    dispatch(clearTagSelection())
    dispatch(closeSearchbar())
    dispatch(updateSearchText(''))
    //TODO: add dispatch for criteria when criteria is created
  }

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
      has_age_requirement={item.has_age_requirement}
      has_fee_requirement={item.has_fee_requirement}
      has_income_requirement={item.has_income_requirement}
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
        clearAllFilters={handleClearAllFilters}
        filtersApplied={services.length != data.length ? true : false}
      />
      {ResultsItems}
      {data.length > itemsPerPage && (
        <StyledReactPaginate
          activeClassName='active'
          breakLabel='...'
          nextLabel='NEXT >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel='< PREV'
        />
      )}
    </>
  )
}
