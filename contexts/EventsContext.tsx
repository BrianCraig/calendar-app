import React from 'react';
import { Event } from '../models/event';
import { add } from 'date-fns';

const defaultEvents: Event[] = [
  {
    id: 0,
    title: "Test Event now",
    dateTime: (new Date()).toISOString(),
    location: { id: 3, name: "Texas, USA" },
    color: "#50fa7b"
  },
  {
    id: 1,
    title: "Test Event now n3",
    dateTime: (add(new Date(), {seconds: 2})).toISOString(),
    location: { id: 3, name: "Missouri, USA" },
    color: "#50fa7b"
  },
  {
    id: 2,
    title: "Test Event now n2",
    dateTime: (add(new Date(), {seconds: 1})).toISOString(),
    location: { id: 3, name: "Null island, ??" },
    color: "#50fa7b"
  },
  {
    id: 3,
    title: "This should overflow",
    dateTime: (add(new Date(), {seconds: 3})).toISOString(),
    location: { id: 3, name: "Texas, USA" },
    color: "#50fa7b"
  },
  {
    id: 4,
    title: "Tomorrow",
    dateTime: (add(new Date(), {days: 1})).toISOString(),
    location: { id: 3, name: "Texas, USA" },
    color: "#50fa7b"
  }
]

interface EventsContextInterface {
  events: Event[],
  addEvent: (event: Event) => undefined,
  replaceEvent: (event: Event) => undefined
}

export const EventsContext = React.createContext<EventsContextInterface>({
  events: [],
  addEvent: () => undefined,
  replaceEvent: () => undefined
});

export const EventsContextProvider: React.FunctionComponent = ({ children }) => {

  const [events, setEvents] = React.useState(defaultEvents);
  return <EventsContext.Provider value={{ events, addEvent: () => undefined, replaceEvent: () => undefined }}>
    {children}
  </EventsContext.Provider >
}
