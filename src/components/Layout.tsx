import Header from './Header'

type Props = {
  children: React.ReactNode
}

// TODO: Refactor main
export default function Layout({ children }: Props) {
  return (
    // TODO: Remove this
    <div
      style={{
        maxWidth: '450px',
        margin: 'auto',
        height: 'auto !important',
        minHeight: '100vh',
        border: '0.5px solid black',
      }}
    >
      <Header />
      <main style={{ height: '100%' }}>{children}</main>
    </div>
  )
}
