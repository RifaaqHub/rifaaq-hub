import { Heading, Maxwidth, SubTitle } from '@/components'
import Image from 'next/image'

const Projects = () => {
  return (
    <Maxwidth
      as={'section'}
      id="projects"
      tw="text-center py-[6.25rem] px-[1.56rem] md:(px-[3rem]) lg:(py-[7rem] px-[4rem]) xl:(py-[8.12rem] px-[6.19rem])"
    >
      <SubTitle tw="pb-6">OUR WORKS</SubTitle>
      <Heading $serif>Portfolio</Heading>

      <div tw="pt-12 grid gap-5 md:(grid-cols-2) lg:(grid-cols-3 pt-16 gap-[1.69rem]) xl:(grid-cols-4)">
        {projects.map((project, idx) => (
          <div
            key={idx}
            tw="relative mx-5 w-full h-[17.5rem] lg:(h-[26.25rem])"
          >
            <Image
              src={`/projects/${project.img}`}
              alt={project.title}
              fill
              tw="object-cover"
            />
          </div>
        ))}
      </div>
    </Maxwidth>
  )
}

const projects = [
  {
    title: '',
    img: '1.png',
  },
  {
    title: '',
    img: '2.png',
  },
  {
    title: '',
    img: '3.png',
  },
  {
    title: '',
    img: '4.png',
  },
]

export default Projects
