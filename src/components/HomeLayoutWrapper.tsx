'use client'

import Header from './Header'

const HomeLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HomeLayoutProvider
