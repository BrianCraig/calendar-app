import '../styles/globals.css'
import { AppLayout } from '../components/AppLayout'
import { EventsContextProvider } from '../contexts/EventsContext'

function MyApp({ Component, pageProps }) {
  return <AppLayout>
    <EventsContextProvider>
      <Component {...pageProps} />
    </EventsContextProvider>
  </AppLayout>
}

export default MyApp
