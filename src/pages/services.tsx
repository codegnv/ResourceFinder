import styled from '@emotion/styled'
import Head from 'next/head'
import { searchText } from 'src/components/Header/Search/searchSlice'
import { ErrorState, LoaderState, NoResultsState } from 'src/components/shared/Status'
import { selectedCategories } from 'src/components/Tabs/Content/Categories/categoriesSlice'
import { selectedCostParticipationItems } from 'src/components/Tabs/Content/MoreFilters/costParticipationSlice'
import { selectedDepartments } from 'src/components/Tabs/Content/MoreFilters/departmentsSlice'
import { useAppSelector } from 'src/services/hooks'
import { Results } from '../components/Results'
import { Tabs } from '../components/Tabs'
import { useGetAllServicesQuery } from '../services/api'

function Services() {
  const { data, isError, isLoading } = useGetAllServicesQuery(1)
  const categories = useAppSelector(selectedCategories)
  const departments = useAppSelector(selectedDepartments)
  const search = useAppSelector(searchText)
  const costParticipation = useAppSelector(selectedCostParticipationItems)

  const StyledResults = styled.section`
    padding: 24px;
  `

  if (isError)
    return (
      <StyledResults>
        <ErrorState />
      </StyledResults>
    )

  if (isLoading)
    return (
      <StyledResults>
        <LoaderState />
      </StyledResults>
    )

  if (!data?.data)
    return (
      <StyledResults>
        <NoResultsState />
      </StyledResults>
    )

  return (
    <>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Tabs />

      <main>
        <StyledResults>
          <Results services={data.data} filters={{ categories, costParticipation, departments, search }} />
        </StyledResults>
      </main>
    </>
  )
}

export default Services
