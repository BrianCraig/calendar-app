import React from 'react';
import { Event, eventsComparatorByIdNegated } from '../models/event';
import { add } from 'date-fns';

const defaultEvents: Event[] = [
  {
    id: "0",
    title: "Test Event now",
    dateTime: (new Date()).toISOString(),
    location: "Texas, USA",
    color: "#50fa7b"
  },
  {
    id: "1",
    title: "Test Event now n3",
    dateTime: (add(new Date(), { seconds: 2 })).toISOString(),
    location: "Missouri, USA",
    color: "#50fa7b"
  },
  {
    id: "2",
    title: "Test Event now n2",
    dateTime: (add(new Date(), { seconds: 1 })).toISOString(),
    location: "Null island, ??",
    color: "#50fa7b"
  },
  {
    id: "3",
    title: "This should overflow",
    dateTime: (add(new Date(), { seconds: 3 })).toISOString(),
    location: "Texas, USA",
    color: "#50fa7b"
  },
  {
    id: "4",
    title: "Tomorrow",
    dateTime: (add(new Date(), { days: 1 })).toISOString(),
    location: "Texas, USA",
    color: "#50fa7b"
  }
]

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

  const [events, setEvents] = React.useState(defaultEvents);
  return <EventsContext.Provider value={
    {
      events,
      addEvent: (event) => setEvents([...events, { ...event, id: Math.random().toString(36).substring(7) }]),
      replaceEvent: (event) => setEvents([...(events.filter(eventsComparatorByIdNegated(event.id))), event]),
    }} >
    {children}
  </EventsContext.Provider >
}
