import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import Navbar from './components/navbar/navbar'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movement',
  description: 'Movement is a workout tracker web app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 flex flex-col items-center `}
      >
        <Provider>
          <ToasterContext />
          <Navbar />
          <PrimeReactProvider>
            <main className="max-w-[1100px] w-full my-10 px-5 xl:px-0 min-h-[95vh]">
              {children}
            </main>
          </PrimeReactProvider>
          <Footer />
        </Provider>
        <div className="portal"></div>
      </body>
    </html>
  )
}
