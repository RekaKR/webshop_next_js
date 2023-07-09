//styles here import '@styles/css'

import Navbar from '@components/Navbar'

export const metadata = {
  title: "Webshop",
  description: "It is a webshop using fakestoreapi.com"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='hun'>
      <body>
        <main className='app'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
