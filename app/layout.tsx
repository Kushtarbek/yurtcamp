import './globals.css'
import {Nunito} from 'next/font/google';
import type { Metadata } from 'next'
import Navbar from '@/app/components/navbar/Navbar';
import ClientOnly from '@/app/components/ClientOnly';
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'Airbnb',
  description: 'Enjoy your vacation',
}

const font = Nunito( {
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly >
          <Modal isOpen/>
          <Navbar/>
        </ClientOnly>
        {children}</body>
    </html>
  )
}
