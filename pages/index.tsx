import { GetStaticProps, NextPage } from 'next'
import SEO from '../components/seo'
import { getAllPosts, getClient, getSanityImageConfig } from '@/libs/sanity.client'
import { Post } from '@/libs/interfaces'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import Link from 'next/link'
import Header from '@/components/layouts/global/Header'

interface PostsProps {
  posts: Post[]
}

const HomePage: NextPage<PostsProps> = () => {

  return (
    <>
      <SEO title={'Home Page'} description={'Home Page description'} keywords={'Home Page keywords'} />

      <Header />
    </>
  )
}

//export const getStaticProps: GetStaticProps = async () => {
//  const client = getClient()

//  const posts = await getAllPosts(client)

//  return {
//    props: {
//      posts,
//    },
//  }
//}

export default HomePage