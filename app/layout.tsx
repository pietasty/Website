import './global.css'
import { Navbar } from './components/nav'

export const metadata = {
  title: "Yubo's Website",
  description: "I don't know what I am doing.",
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en"
      className="text-black bg-warm-color"
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}
