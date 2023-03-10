import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import ClickAwayListener from 'react-click-away-listener'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../services/hooks'
import { Content } from './Content'
import { selectedCategories } from './Content/Categories/categoriesSlice'
import { selectedDepartments } from './Content/MoreFilters/departmentsSlice'
import Tab from './Tab'
import { clearTabSelection, selectedTab, toggleTabSelection } from './tabsSlice'

const StyledTabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const StyledContent = styled.div`
  width: 100%;
  position: relative;
`

export function Tabs() {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')
  const visibleTab = useAppSelector(selectedTab)
  const selectedTags = useAppSelector(selectedCategories)
  //TODO update to More Filters
  const selectedDepts = useAppSelector(selectedDepartments)

  const TABS = [
    { name: 'services', selectedCount: selectedTags.length },
    { name: 'moreFilters', selectedCount: selectedDepts.length },
  ]

  const handleOnClearTabs = () => {
    dispatch(clearTabSelection())
  }

  return (
    <ClickAwayListener onClickAway={handleOnClearTabs}>
      <section>
        <StyledTabs>
          {TABS.map(tab => (
            <Tab
              fullWidth
              label={`${t(tab.name)}${tab.selectedCount > 0 ? ' (' + tab.selectedCount + ') ' : ''}`}
              key={tab.name}
              selected={visibleTab === tab.name}
              onClick={() => dispatch(toggleTabSelection(tab.name))}
            />
          ))}
        </StyledTabs>
        <StyledContent>
          <AnimatePresence key={visibleTab}>{!!visibleTab && <Content label={visibleTab} />}</AnimatePresence>
        </StyledContent>
      </section>
    </ClickAwayListener>
  )
}
