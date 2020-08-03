import { EventsContextProvider } from '../contexts/EventsContext'

function MyApp({ Component, pageProps }) {
  return <EventsContextProvider>
    <Component {...pageProps} />
  </EventsContextProvider>
}

export default MyApp
