import '../styles/globals.css'
import RootLayout from '../components/layout'
import { NextPage } from 'next/types'

const App: React.FC<NextPage> = ({ Component, pageProps }: any) => {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  )
}

export default App