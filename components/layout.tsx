import Head from "next/head"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      {children}
    </>
  )
}