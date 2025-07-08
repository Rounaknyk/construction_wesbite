import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Siddharth Constructions - Professional Construction Services',
  description: 'Leading construction company specializing in residential and commercial projects. Quality construction services with experienced professionals.',
  keywords: 'construction, building, renovation, contractor, residential, commercial',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}