import Head from 'next/head'
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';
import { DayCalendar } from '../../components/DayCalendar';

export default function Home() {
  const {query: {date}} = useRouter();
  // TODO check bad query usages
  const nativeDate = new Date(date as string);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography>Events for {format(nativeDate, 'PPP')}</Typography>
      <DayCalendar />
    </div>
  )
}
