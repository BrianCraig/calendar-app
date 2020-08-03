import Head from 'next/head'
import React from 'react';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';
import { DayCalendar } from '../../components/DayCalendar';
import { filterEventsByDay } from '../../models/event';
import { EventsContext } from '../../contexts/EventsContext';
import { AppLayout } from '../../components/AppLayout';

const Home = () => {
  const {query: {date}} = useRouter();
  // TODO check bad query usages
  const nativeDate = parseISO(date as string);
  const { events } = React.useContext(EventsContext);
  const title = `Events for ${format(nativeDate, 'PPP')}`;
  return (
    <AppLayout title={title} >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DayCalendar events={filterEventsByDay(events, nativeDate)} />
    </AppLayout>
  )
}

// Disable static rendering
Home.getInitialProps = async (ctx) => ({})

export default Home;