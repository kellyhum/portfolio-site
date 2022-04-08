// import components
import Meta from '@components/Meta'
import Nav from '@components/Nav'
import Section from '@components/Section'
import Project from '@components/Project';

// import icon
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <main>
      <Meta /> {/*get metadata*/}

      <Nav /> {/*import navigation menu*/}

      <section id='landing' className="pt-20 min-h-screen flex flex-col justify-evenly items-center">
        <div>
          <h1 className='font-title font-bold text-6xl text-center pb-8'>
            Hi, I'm  <span className='landing-name relative'>Kelly</span>
          </h1>
          <h1 className='font-title font-bold text-6xl text-center'>
            <span className='landing-left relative'>Tinkerer</span> and <span className='landing-right relative'>puzzle solver</span>
          </h1>
        </div>

        <KeyboardArrowDownRoundedIcon sx={{fontSize: 80}} className='-mb-32'/>
      </section>

      <Section id={'about'} title={'I love a good challenge.'}>
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Section>

      <Section id={'projects'} title={'And projects are fun too!'}>
        <p className='mb-8'>Check out some of my featured projects!</p>

        <div className='grid grid-cols-2 gap-10'>
          <Project title={'test'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />

          <Project />
          <Project />
        </div>
      </Section>

      <Section id={'contact'} title={'Curious? Let\'s connect!'} className='text-center py-20'>
        <p className='mb-8'>My inbox is always open, send me a message and I'll do my best to get back to you!</p>

        <button className='py-3 px-5 border rounded hover:bg-golden transition-all'>
          <a href='mailto:kellyhum88@gmail.com'>Say Hi</a>
        </button>
      </Section>

      <footer className='text-center py-5'>
        <a href='https://github.com/kellyhum' target={'_blank'} rel={'noreferrer'}><GitHubIcon style={{ color: '#2D2D2B', fontSize: 25 }} sx={{ mx: '0.5rem' }} /></a>
        <a href='https://www.linkedin.com/in/kellyhum/' target={'_blank'} rel={'noreferrer'}><LinkedInIcon style={{ color: '#2D2D2B', fontSize: 25 }} sx={{ mx: '0.5rem' }} /></a>
        <a href='mailto:kellyhum88@gmail.com'><EmailIcon style={{ color: '#2D2D2B', fontSize: 25 }} sx={{ mx: '0.5rem' }} /></a>
        
        <p className='pt-3 text-sm'>Designed + Built by Kelly Hum, © 2022</p>
      </footer>
    </main>
  )
}
