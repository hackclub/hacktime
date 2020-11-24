import Head from 'next/head'
import { Container } from 'theme-ui'
import { Text } from '@hackclub/theme'
import useSWR from 'swr'
import axios from 'axios'

export default function Home() {
  const getStats = async (username) => await fetch(`/api/getStats?username=${username}`);
  const getMilliseconds = (minutes, hours) => (((hours / 60) + minutes) / 60) / 1000;
  const wakatimeRegex = RegExp(/(\d*)\shrs\s(\d*)\smins/g);
  const getHours = (wakatimeResponse) => (wakatimeRegex.exec(wakatimeResponse)[0] || NaN);
  const getMinutes = (wakatimeResponse) => (wakatimeRegex.exec(wakatimeResponse)[1] || NaN);
  const users = ['safinsingh', 'sarthak', 'cjdenio', 'Matthew_Gleich']
  const unrankedUsers = [];
  users.forEach(username => {
    let stats = getStats(username);
    unrankedUsers.push({
      username: username,
      hours: getHours(stats),
      minutes: getMinutes(stats),
      milliseconds: getMilliseconds(getMinutes(stats), getHours(stats)),
    })
  });
  const rankedUsers = unrankedUsers.slice().sort((a, b) => b.milliseconds - a.milliseconds);

  return (
    <>
      <Head>
        <title>Hack Club Wakatime Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {rankedUsers.map(user => {
          <h1>{user.username} is ranked {user.indexOf() + 1} with {user.hours} hours and {user.minutes}</h1>
        })}
      </Container>
    </>
  )
}
