// import components
import Meta from '@components/Meta'
import Nav from '@components/Nav'
import Section from '@components/Section'

// import icons
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// import projects
import projectlist from 'public/js/projectlist.js'

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
          {
            projectlist.map(({title, desc, techstack, github, key}) => (
              <div className='w-full p-10 border rounded-2xl hover:shadow-projectshadow transition-all' key={key}>
                <h3 className="text-3xl font-title">{title}</h3>
                <hr className="my-5"></hr>
                <p className='my-3'>{desc}</p>
                {techstack.map((tech) => (
                  <span className='font-semibold my-3 pr-3'>{tech} </span>
                ))}
                <a href={github} target={'_blank'} rel={'noreferrer'} className="block pt-3 underline underline-offset-1 hover:text-cherry transition-colors">Github</a>
              </div>
            ))
          }
        </div>
      </Section>

      <Section id={'contact'} title={'Curious? Let\'s connect!'} className='text-center py-20'>
        <p className='mb-8'>My inbox is always open, send me a message and I'll do my best to get back to you!</p>

        <button className='py-3 px-5 border rounded hover:bg-golden transition-all'>
          <a href='mailto:kellyhum88@gmail.com'>Say Hi</a>
        </button>
      </Section>

      <footer className='text-center py-5'>
        <a href='https://github.com/kellyhum' target={'_blank'} rel={'noreferrer'}><GitHubIcon sx={{ mx: '0.5rem', fontSize: 25, color: '#2d2d2b', "&:hover": { color: "#9b2226" } }} /></a>
        <a href='https://www.linkedin.com/in/kellyhum/' target={'_blank'} rel={'noreferrer'}><LinkedInIcon sx={{ mx: '0.5rem', fontSize: 25, color: '#2d2d2b', "&:hover": { color: "#9b2226" } }} /></a>
        <a href='mailto:kellyhum88@gmail.com'><EmailIcon sx={{ mx: '0.5rem', fontSize: 25, color: '#2d2d2b', "&:hover": { color: "#9b2226" } }} /></a>

        <p className='pt-3 text-sm'>Designed + Built by Kelly Hum, © 2022</p>
      </footer>
    </main>
  )
}
