import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import ClickAwayListener from 'react-click-away-listener'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/services/hooks'
import { Content } from './Content'
import Tab from './Tab'
import { clearTabSelection, selectedTab, toggleTabSelection } from './tabsSlice'

const TAB_NAMES = ['categories', 'departments']

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

  const handleOnClearTabs = () => {
    dispatch(clearTabSelection())
  }

  return (
    <ClickAwayListener onClickAway={handleOnClearTabs}>
      <section>
        <StyledTabs>
          {TAB_NAMES.map(tabName => (
            <Tab
              fullWidth
              label={t(tabName)}
              key={tabName}
              selected={visibleTab === tabName}
              onClick={() => dispatch(toggleTabSelection(tabName))}
            />
          ))}
        </StyledTabs>
        <StyledContent>
          {TAB_NAMES.map(tabName => (
            <Content key={tabName} label={tabName} selected={visibleTab === tabName} />
          ))}
        </StyledContent>
      </section>
    </ClickAwayListener>
  )
}
