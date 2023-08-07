'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const AppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_KEY!}
        container={{
          element: 'recap',
          parameters: {
            badge: 'inline',
            theme: 'dark',
          },
        }}
      >
        {children}
      </GoogleReCaptchaProvider>

      <Toaster position="top-center" reverseOrder={false} />
    </QueryClientProvider>
  )
}

export default AppProviders
