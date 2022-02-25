import Meta from '@components/Meta'
import Nav from '@components/Nav'
import Section from '@components/Section'

export default function Home() {
  return (
    <main className='h-screen w-screen text-brown'>
      <Meta /> {/*get metadata*/}

      <Nav /> {/*import navigation menu*/}

      <Section id={'#'} title={'Hi, I\'m Kelly!'}> {/*landing section*/}
        <p>
          Welcome to my digital space!  This is where you’ll find everything from my full scale projects to half-baked ideas.
          Feel free to poke around, or take your time and scroll!
        </p>
      </Section>

    </main>
  )
}
