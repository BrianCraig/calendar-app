import Head from 'next/head'
import { MonthlyCalendar } from '../components/MonthlyCalendar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MonthlyCalendar />
    </div>
  )
}
