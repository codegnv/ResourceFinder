import Header from './Header'

type Props = {
  children: React.ReactNode
}

// TODO: Refactor main
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>{children}</main>
    </>
  )
}
