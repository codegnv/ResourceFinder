import Header from './Header'
import Tabs from './Tabs'

type Props = {
  children: React.ReactNode
}

// TODO: Refactor main
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Tabs />
      <main style={{ minHeight: '100vh' }}>{children}</main>
    </>
  )
}
