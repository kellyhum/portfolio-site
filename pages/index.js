// import components
import Meta from '@components/Meta'
import Nav from '@components/Nav'
import Section from '@components/Section'
import Project from '@components/Project';

import projectlist from 'public/js/projectlist';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function Home() {
  return (
    <main className='w-full h-screen text-black bg-beige'>
      <Meta /> {/*get metadata*/}

      <Nav /> {/*import navigation menu*/}

      <section id='landing' className="px-44 h-full w-full flex flex-col justify-evenly items-center">
        <div>
          <h1 className='font-title font-bold text-5xl text-center pb-8'>
            Hi, I'm  <span className='text-opacity-0 bg-clip-text bg-gradient-to-tr from-teal via-golden to-coral'>Kelly</span>
          </h1>
          <h1 className='font-title font-bold text-5xl text-center'>Tinkerer and puzzle solver</h1>
        </div>

        <div className='flex flex-col items-center'>
          <KeyboardArrowDownRoundedIcon sx={{fontSize: 50, m: -2}}/>
          <KeyboardArrowDownRoundedIcon sx={{fontSize: 80, m:-2}}/>
        </div>
      </section>

      <Section id={'about'} title={'I love a good challenge.'}>
        <div className='flex'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <KeyboardArrowDownRoundedIcon />
        </div>
      </Section>

      <Section id={'projects'} title={'And projects are fun too!'}>
        <p>Check out some of my featured projects!</p>

        <div className='flex'>
          {
            projectlist.map((project) => (
              <Project title={project.title} description={project.description} techstack={project.techstack}/>
            ))
          }
        </div>
      </Section>
    </main>
  )
}
