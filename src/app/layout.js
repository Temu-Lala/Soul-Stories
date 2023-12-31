import { Inter } from 'next/font/google'
import './globals.css'
import NavbarOut from '@/components/navbarout/NavbarOut'
import Sidebar from '@/components/sidebar/Sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Soul Stories ',
  description: 'created by lala',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={inter.className} >
       
      <NavbarOut/>
        
        
        
        {children}
        
        </body>
    </html>
  )
}
