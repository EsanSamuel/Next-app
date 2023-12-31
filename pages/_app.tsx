import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Toaster />
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
