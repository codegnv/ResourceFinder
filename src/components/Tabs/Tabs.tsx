import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import Content from './Content'
import Tab from './Tab'

export interface ITabsProps {}

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

function Tabs({}: ITabsProps) {
  const { t } = useTranslation('common')
  const [selectedTab, setSelectedTab] = useState<number | undefined>(undefined)
  const tabNames = ['categories', 'departments', 'criteria']
  const handleTabClick = (i: number) => {
    if (selectedTab === i) return setSelectedTab(undefined)
    setSelectedTab(i)
  }
  return (
    <div>
      <StyledTabs>
        {tabNames.map((tabName, i) => (
          <Tab
            fullWidth
            label={t(tabName)}
            key={tabName}
            selected={selectedTab === i}
            onClick={() => handleTabClick(i)}
          />
        ))}
      </StyledTabs>
      <StyledContent>
        {tabNames.map((tabName, i) => (
          <Content key={tabName} label={tabName} selected={selectedTab === i} />
        ))}
      </StyledContent>
    </div>
  )
}

export default Tabs
