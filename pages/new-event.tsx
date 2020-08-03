import Head from 'next/head'
import { EventEditor } from '../components/EventEditor'

const NewEvent = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventEditor />
    </div>
  )
}

NewEvent.getInitialProps = async (ctx) => ({})

export default NewEvent;