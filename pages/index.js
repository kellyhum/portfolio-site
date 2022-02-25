import Meta from '@components/Meta'
import Nav from '@components/Nav'

export default function Home() {
  return (
    <main className='h-screen w-screen bg-brown'>
      <Meta /> {/*get metadata*/}

      <Nav /> {/*import navigation menu*/}
    </main>
  )
}
