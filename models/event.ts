import { isSameDay } from "date-fns";

export interface Event {
  id?: string,
  title: string,
  dateTime: string,
  location: { name: string, id: number },
  color?: string
}

export const filterEventsByDay = (events: Event[], day: Date) => events.filter((event) => isSameDay(new Date(event.dateTime), day));

export const eventsComparatorById = (id: string) => (event) => event.id === id;
export const eventsComparatorByIdNegated = (id: string) => (event) => event.id !== id;