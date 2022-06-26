import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
}

// TODO: Refactor main
export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>{children}</main>
    </>
  )
}
