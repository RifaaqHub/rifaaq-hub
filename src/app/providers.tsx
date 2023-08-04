'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const AppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </QueryClientProvider>
  )
}

export default AppProviders
