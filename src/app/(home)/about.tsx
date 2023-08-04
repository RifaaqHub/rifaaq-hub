import { Heading, Maxwidth, Paragraph } from '@/components'
import tw from 'twin.macro'

const About = () => {
  const { vision, mission, distinction } = about
  return (
    <section id="about">
      {[vision, mission, distinction].map(section => {
        let isMission = section === mission,
          isDistinction = section === distinction

        return (
          <section
            key={section.title}
            css={[tw`bg-white`, isMission && tw`bg-[#EFF1F9]`]}
          >
            <Maxwidth
              css={[
                tw`flex flex-col gap-[4.65rem] py-20 px-6 md:(px-16) lg:(flex-row items-center px-[6.25rem])`,
                isMission && tw`lg:(flex-row-reverse)`,
              ]}
            >
              <div tw="flex-1 max-w-[700px]">
                <Heading
                  tw="pb-4 text-primary"
                  as={'h2'}
                  $variant={isDistinction ? 'h3' : 'h2'}
                  css={[isDistinction && tw`text-[#212121] pb-7 lg:(pb-10)`]}
                >
                  {section.title}
                </Heading>
                <Paragraph>{section.text}</Paragraph>
              </div>

              <div
                tw="relative h-[18.5rem] bg-contain bg-no-repeat w-full max-w-[21rem] mx-auto lg:(max-w-[28.5rem] h-[27.5rem])"
                css={{ backgroundImage: `url(${section.img})` }}
              />
            </Maxwidth>
          </section>
        )
      })}
    </section>
  )
}

const about = {
  mission: {
    title: 'Our Vision',
    text: 'Our vision is to become a leading force in the Muslim world, making far-reaching positive impacts in the lives of African Muslims and the world at large.',
    img: '/mission.png',
  },
  vision: {
    title: 'Our Mision',
    text: 'Our mission is to assist every member of the Muslim community in becoming the best version of themselves spiritually and in all aspects of life.',
    img: '/vision.png',
  },
  distinction: {
    title:
      '“What sets us apart is our ability to present individuals with simple continuous steps leading to their ultimate better version”',
    text: 'We are striving to give every Muslim, whether learned or just finding their feet, a reliable associate that makes the journey so easy through our platform. We also leverage other available resources from the wider Muslim community to provide our users with the best possible experience.',
    img: '/distinction.png',
  },
}

export default About
