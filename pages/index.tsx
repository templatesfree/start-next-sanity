import { NextPage } from 'next'
import SEO from '../components/seo'

interface Props { }

const HomePage: NextPage<Props> = ({ }) => {

  return (
    <>

      <SEO title={'Home Page'} description={'Home Page description'} keywords={'Home Page keywords'} />

      <h1>Home Page</h1>
    </>
  )
}

export default HomePage