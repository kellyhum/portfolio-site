// import components
import Meta from '@components/Meta'
import Nav from '@components/Nav'
import Section from '@components/Section'
import ProjectCard from '@components/ProjectCard'

// import data
import projectlist from 'public/js/projectlist'

export default function Home() {
  return (
    <main className='h-screen w-full text-brown dark:bg-brown dark:text-beige transition-colors'>
      <Meta /> {/*get metadata*/}

      <Nav /> {/*import navigation menu*/}

      <Section id={'#'} title={'Hi, I\'m Kelly!'}> {/*landing section*/}
        <p className='w-1/2 pt-4'>
          Welcome to my digital space!  This is where you’ll find everything from my full scale projects to half-baked ideas.
          Feel free to poke around, or take your time and scroll!
        </p>
      </Section>

      <Section id={'#about'} title={'About'}> {/*about section*/}
        <div className='flex justify-between'>
          <p>
            lorem ipsum
          </p>
          
          <h3>
            I like turning the old into the new
          </h3>
        </div>
      </Section>

      <Section id={'#projects'} title={'Projects'}> {/*projects section*/}
        <p>
          lorem ipsum
        </p>

        {
          projectlist.map((project) => (
            <ProjectCard title={project.title} description={project.description} blurb={project.blurb} techstack={project.techstack}/>
          ))
        }

      </Section>
    </main>
  )
}
