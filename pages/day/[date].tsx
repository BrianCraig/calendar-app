import Head from 'next/head'
import React from 'react';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';
import { DayCalendar } from '../../components/DayCalendar';
import { filterEventsByDay } from '../../models/event';
import { EventsContext } from '../../contexts/EventsContext';

const Home = () => {
  const {query: {date}} = useRouter();
  // TODO check bad query usages
  const nativeDate = parseISO(date as string);
  const { events } = React.useContext(EventsContext);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography>Events for {format(nativeDate, 'PPP')}</Typography>
      <DayCalendar events={filterEventsByDay(events, nativeDate)} />
    </div>
  )
}

// Disable static rendering
Home.getInitialProps = async (ctx) => ({})

export default Home;