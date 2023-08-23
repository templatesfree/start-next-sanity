import { NextPage } from 'next'
import SEO from '../components/seo'

interface Props { }

const About: NextPage<Props> = ({ }) => {
  return (
    <>
      <SEO title={'About Page'} description={'About Page description'} keywords={'About Page keywords'} />

      <div>About page</div>
    </>
  )
}

export default About