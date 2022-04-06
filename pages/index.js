// import components
import Meta from '@components/Meta'
import Nav from '@components/Nav'
import Section from '@components/Section'
import Project from '@components/Project';

// import icons
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';

export default function Home() {
  return (
    <main>
      <Meta /> {/*get metadata*/}

      <Nav /> {/*import navigation menu*/}

      <section id='landing' className="pt-20 min-h-screen flex flex-col justify-evenly items-center">
        <div>
          <h1 className='font-title font-bold text-6xl text-center pb-8'>
            Hi, I'm  <span className='text-transparent bg-clip-text bg-gradient-to-tr from-teal via-golden to-coral'>Kelly</span>
          </h1>
          <h1 className='font-title font-bold text-6xl text-center'>Tinkerer and puzzle solver</h1>
        </div>

        <div className='flex flex-col items-center -mb-40'>
          <KeyboardArrowDownRoundedIcon sx={{fontSize: 50, m: -2}}/>
          <KeyboardArrowDownRoundedIcon sx={{fontSize: 80, m:-2}}/>
        </div>
      </section>

      <Section id={'about'} title={'I love a good challenge.'}>
        <div className='flex'>
          <p className='flex-1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className='grid grid-cols-2 grid-rows-2 justify-center items-center flex-1'>
            <ExtensionRoundedIcon sx={{fontSize: 80}}/>
            <ExtensionRoundedIcon sx={{fontSize: 80}}/>
            <ExtensionRoundedIcon sx={{fontSize: 80}}/>
            <ExtensionRoundedIcon sx={{fontSize: 80}}/>
          </div>
        </div>
      </Section>

      <Section id={'projects'} title={'And projects are fun too!'}>
        <p className='mb-16'>Check out some of my featured projects!</p>

        <div className='flex gap-10'>
          <Project title={'test'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />

          <Project />
        </div>
      </Section>
    </main>
  )
}
