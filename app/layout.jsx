//styles here import '@styles/css'

export const metadata = {
  title: "Webshop",
  description: "It is a webshop using fakestoreapi.com"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='hun'>
      <body>
        <div className="main"></div>
      </body>

      <main className="app">
        {/*nav*/}
        {children}
      </main>
    </html>
  )
}

export default RootLayout
