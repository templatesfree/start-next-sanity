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

        <meta property="twitter:image" content="Twitter link preview image URL" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Twitter link preview title" />
        <meta property="twitter:description" content="Twitter link preview description" />

        <meta property="og:image" content="Link preview image URL" />

        <meta property="og:url" content="Canonical link preview URL" />
      </Head>
    </>
  )
}

export default SEO