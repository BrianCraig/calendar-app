import { isSameDay, compareAsc } from "date-fns";

export interface Event {
  id?: string,
  title: string,
  dateTime: string,
  location: string,
  color?: string
}

export const filterEventsByDay = (events: Event[], day: Date) => events.filter((event) => isSameDay(new Date(event.dateTime), day));

export const eventsComparatorById = (id: string) => (event) => event.id === id;
export const eventsComparatorByIdNegated = (id: string) => (event) => event.id !== id;

export const comparatorByDatetimeAsc = (ev1: Event, ev2: Event) => compareAsc(new Date(ev1.dateTime), new Date(ev2.dateTime))