import HomeLayoutProvider from '@/components/HomeLayoutWrapper'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
        <HomeLayoutProvider>{children}</HomeLayoutProvider>
      </main>
    </>
  )
}
