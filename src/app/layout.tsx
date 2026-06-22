import type { Metadata } from 'next'
import { Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})
const notoSerifJp = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
})

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-playfair",
// })

export const metadata: Metadata = {
  title: 'Hair Salon',
  description: '美容室予約サイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body
        className={`${notoSerifJp.variable} ${cormorant.variable} font-serif`}
      >
        {children}
      </body>
    </html>
  )
}
