import '@styles/css/style.css'
import { ReduxProvider } from './redux/provider'
import Navbar from '@components/Navbar'

export const metadata = {
  title: "Webshop",
  description: "It is a webshop using fakestoreapi.com"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='hun'>
      <body>
        <ReduxProvider>
          <main className='app'>
            <Navbar />
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}

export default RootLayout
