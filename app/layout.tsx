
import './globals.css'
import {Nunito} from 'next/font/google';
import type { Metadata } from 'next'
import Navbar from '@/app/components/navbar/Navbar';

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
         <Navbar/>
        {children}</body>
    </html>
  )
}
