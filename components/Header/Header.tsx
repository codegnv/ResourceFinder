import styled from '@emotion/styled'

// TODO: Refactor with global styles
function Header() {
  const StyledHeader = styled.div`
    color: #0f191c;
    height: 70px;
    background-color: #e0f7f6;
    padding: 24px 24px;
  `
  return <StyledHeader>Header</StyledHeader>
}

export default Header
