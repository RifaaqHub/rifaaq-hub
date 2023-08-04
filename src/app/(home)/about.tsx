import { Heading, Maxwidth, Paragraph, SubTitle } from '@/components'
import Image from 'next/image'
import about from '/public/about.png'

const About = () => {
  return (
    <section id="about">
      <Maxwidth tw="flex flex-col relative lg:(flex-row items-center)">
        <div tw="bg-[#212121] pt-[6.25rem] pb-[10rem] px-6 text-white flex flex-col gap-6 lg:(gap-10 w-[65%] px-[4rem] py-[10rem]) xl:(w-[53%] px-[6.12rem] py-[15.7rem])">
          <SubTitle>WHO WE ARE</SubTitle>
          <Heading $serif tw="text-secondary">
            About Us
          </Heading>

          <Paragraph tw="pt-6 pb-2 lg:(p-0 max-w-[29.5rem])">
            At Rifaaq Hub, we are more than just a digital agency. We are a
            passionate team of tech enthusiasts, developers, and designers who
            believe in the transformative power of technology when harnessed
            with purpose. Our mission is to empower individuals and businesses
            with innovative digital solutions that drive growth, create value,
            and leave a positive impact.
          </Paragraph>

          <Paragraph tw="lg:(max-w-[29.5rem])">
            Whether you are a startup, a growing business, or an organization
            with a purpose, Rifaaq Hub is committed to your success. From the
            inception of an idea to the final delivery of a digital product, we
            work with unwavering dedication to ensure that your objectives are
            met and your aspirations realized.
          </Paragraph>
        </div>

        <div tw="px-4 mx-auto -mt-[4.4rem] lg:(mx-0 mt-0 p-0 absolute right-[0] w-[30rem]) xl:(left-[45%] w-[41.5rem])">
          <Image src={about} alt="" />
        </div>
      </Maxwidth>
    </section>
  )
}

export default About
