import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
}

const SEO: NextPage<SeoProps> = ({ title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description"
          content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description"
          content={description} />
        <meta property="og:keywords" content={keywords} />
        <meta property="og:type" content="website" />
      </Head>
    </>
  )
}

export default SEO