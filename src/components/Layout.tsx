interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <main style={{ height: '100%' }}>{children}</main>
    </>
  )
}
