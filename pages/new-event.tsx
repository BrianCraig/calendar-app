import React from 'react';
import { EventEditor } from '../components/EventEditor'
import { EventsContext } from '../contexts/EventsContext'
import { AppLayout } from '../components/AppLayout'


const NewEvent = () => {
  const { addEvent } = React.useContext(EventsContext)

  return (
    <AppLayout
      title={"Add New Event"}
    >
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
    </AppLayout>
  )
}

NewEvent.getInitialProps = async (ctx) => ({})

export default NewEvent;