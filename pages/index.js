// import components
import Meta from '@components/Meta'
import Nav from '@components/Nav'
import Section from '@components/Section'

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function Home() {
  return (
    <main className='w-screen h-screen text-black bg-beige'>
      <Meta /> {/*get metadata*/}

      <Nav /> {/*import navigation menu*/}

      <section id='landing' className="px-44 h-full w-full flex flex-col justify-evenly items-center">
        <div>
          <h1 className='font-title font-bold text-5xl text-center pb-8'>Hi, I'm <span className=''>Kelly</span></h1>
          <h1 className='font-title font-bold text-5xl text-center'>Tinkerer and puzzle solver</h1>
        </div>

        <div className='flex flex-col'>
          <KeyboardArrowDownRoundedIcon sx={{fontSize: 50}}/>
          <KeyboardArrowDownRoundedIcon sx={{fontSize: 80}}/>
        </div>
      </section>

      <Section id={'about'} title={'I love a good challenge.'}>

      </Section>
    </main>
  )
}
