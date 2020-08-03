import { MonthlyCalendar } from '../components/MonthlyCalendar'
import { AppLayout } from '../components/AppLayout'

export default function Home() {
  return (
    <AppLayout withHeader>
      <MonthlyCalendar />
    </AppLayout>
  )
}
