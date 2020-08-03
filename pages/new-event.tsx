import Head from 'next/head'
import React from 'react';
import { EventEditor } from '../components/EventEditor'
import { EventsContext } from '../contexts/EventsContext'

const NewEvent = () => {
  const { addEvent } = React.useContext(EventsContext)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventEditor
        event={{
          title: "",
          dateTime: (new Date()).toISOString(),
          location: {
            id: 0,
            name: ""
          },
          color: "#000"
        }}
        onFinalize={addEvent}
      />
    </div>
  )
}

NewEvent.getInitialProps = async (ctx) => ({})

export default NewEvent;