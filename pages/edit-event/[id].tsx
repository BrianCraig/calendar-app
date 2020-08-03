import React from 'react';
import { EventEditor } from '../../components/EventEditor'
import { EventsContext } from '../../contexts/EventsContext'
import { AppLayout } from '../../components/AppLayout'
import { useRouter } from 'next/router';
import { eventsComparatorById } from '../../models/event';


const EditEvent = () => {
  const { query: { id } } = useRouter();
  const { events, replaceEvent } = React.useContext(EventsContext)
  //TODO add 404 errors
  const event = events.find(eventsComparatorById(id as string))

  return (
    <AppLayout
      title={"Edit Event"}
    >
      <EventEditor
        event={event}
        onFinalize={replaceEvent}
      />
    </AppLayout>
  )
}

EditEvent.getInitialProps = async (ctx) => ({})

export default EditEvent;