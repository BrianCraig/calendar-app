export interface Event {
  id?: string | number,
  title: string,
  dateTime: string,
  location: { name: string, id: number },
  color?: string
}