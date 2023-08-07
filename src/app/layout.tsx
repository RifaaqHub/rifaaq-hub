import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import '@/styles/globals.css'

import { Roboto, Roboto_Serif } from 'next/font/google'
import AppProviders from './providers'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const robotoSerif = Roboto_Serif({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-serif',
})

export const metadata: Metadata = {
  title: 'Rifaaq Hub Home',
  description: 'Your reliable digital agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSerif.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <AppProviders>{children}</AppProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
