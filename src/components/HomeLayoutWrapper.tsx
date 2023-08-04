'use client'

import Header from './Header'
import Footer from './footer'

const HomeLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayoutProvider
