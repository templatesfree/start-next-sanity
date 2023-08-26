import { GetStaticProps, NextPage } from 'next'
import SEO from '../components/seo'
import { getAllPosts, getClient, getSanityImageConfig } from '@/libs/sanity.client'
import { Post } from '@/libs/interfaces'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import Link from 'next/link'

interface PostsProps {
  posts: Post[]
}

const HomePage: NextPage<PostsProps> = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <SEO title={'Home Page'} description={'Home Page description'} keywords={'Home Page keywords'} />
      <h1>Home Page Hello</h1>

      {posts.map((post) => (
        <div key={post._id}>
          {post.imagePost && (
            <Image src={post.imagePost.image} alt={post.imagePost.alt} width={376} height={190} />
          )}
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link href={post.slug}>
            Link to post
          </Link>
        </div>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getClient()

  const posts = await getAllPosts(client)

  return {
    props: {
      posts,
    },
  }
}

export default HomePage