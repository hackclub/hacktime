import Head from 'next/head'
import { Container } from 'theme-ui'
import { Text } from '@hackclub/theme'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hack Club Wakatime Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1></h1>
      </Container>
    </>
  )
}
