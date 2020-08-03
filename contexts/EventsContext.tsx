import React from 'react';
import { Event, eventsComparatorByIdNegated } from '../models/event';
import { add } from 'date-fns';
import { useLocalStorage } from '../utils/useLocalStorage';

const defaultEvents: Event[] = []

interface EventsContextInterface {
  events: Event[],
  addEvent: (event: Event) => any,
  replaceEvent: (event: Event) => any
}

export const EventsContext = React.createContext<EventsContextInterface>({
  events: [],
  addEvent: () => undefined,
  replaceEvent: () => undefined
});

export const EventsContextProvider: React.FunctionComponent = ({ children }) => {

  const [events, setEvents] = useLocalStorage('events-local', []);
  return <EventsContext.Provider value={
    {
      events,
      addEvent: (event) => setEvents([...events, { ...event, id: Math.random().toString(36).substring(7) }]),
      replaceEvent: (event) => setEvents([...(events.filter(eventsComparatorByIdNegated(event.id))), event]),
    }} >
    {children}
  </EventsContext.Provider >
}
