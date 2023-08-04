import {
  GetStartedButton,
  Heading,
  Maxwidth,
  Paragraph,
  SubTitle,
} from '@/components'
import Image from 'next/image'
import hero from '/public/hero-img.png'

const Hero = () => {
  return (
    <section tw="bg-primary text-white -mt-[6rem] lg:(-mt-[8rem])">
      <Maxwidth tw="flex flex-col lg:(flex-row gap-[3rem]) xl:(gap-[11rem])">
        <div tw="pt-[11rem] pb-12 px-6 gap-4 flex flex-col max-w-[29.5rem] lg:(py-[12rem] pl-[6.25rem] pr-0) xl:(py-[16rem])">
          <SubTitle tw="pb-3 text-[0.875rem] lg:(text-lg)">
            WE ARE INNOVATIVE
          </SubTitle>
          <Heading>Rifaaq Hub</Heading>

          <Paragraph tw="pb-4 lg:(pb-10)">
            We pride ourselves in great work ethic, integrity and providing end
            results.
          </Paragraph>

          <GetStartedButton />
        </div>

        <div tw="lg:(w-[60%])">
          <Image alt="" src={hero} tw="w-full object-cover lg:(h-full)" />
        </div>
      </Maxwidth>
    </section>
  )
}

export default Hero
