interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <main style={{ minHeight: '100vh' }}>{children}</main>
    </>
  )
}
