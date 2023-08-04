import { Heading, JoinWaitlist, Maxwidth, Paragraph } from '@/components'

const Hero = () => {
  return (
    <section tw="bg-primary text-white bg-primary bg-center bg-cover bg-[url(/hero-bg-mobile.png)] lg:(bg-[url(/hero-bg-desktop.png)])">
      <Maxwidth tw="flex flex-col max-w-[53rem] text-center items-center justify-center gap-6 py-[9rem] px-6 lg:(py-[8rem])">
        <Heading>Your Companion to Spiritual Growth</Heading>

        <Paragraph tw="pb-4">
          At Rifaaq, we are dedicated to helping every member of the Muslim
          community realize their full potential. Join our waitlist now to
          access exclusive early benefits and embark on a path of spiritual
          growth and personal development like never before.
        </Paragraph>

        <JoinWaitlist shadow />
      </Maxwidth>
    </section>
  )
}

export default Hero
