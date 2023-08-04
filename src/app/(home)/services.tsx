import { Heading, Maxwidth, Paragraph, SubTitle } from '@/components'
import Image from 'next/image'
import servicesImg from '/public/services.png'

const Services = () => {
  return (
    <section tw="bg-[#f9f9f9]">
      <Maxwidth as={'section'} id="services" tw="flex flex-col lg:(flex-row)">
        <div tw="text-[#262626] pt-[6.25rem] pb-[10rem] px-6 lg:(flex-1 px-16) xl:(px-[6.25rem])">
          <SubTitle>WHAT WE DO</SubTitle>

          <Heading $serif tw="pt-6">
            Our Services
          </Heading>

          <div tw="pt-[5rem] flex flex-col gap-12 pr-5 lg:(grid grid-cols-2 gap-x-[2.62rem] gap-y-[4rem] pr-0)">
            {services.map(service => (
              <div key={service.title}>
                <div tw="flex gap-5 pb-6">
                  <span tw="inline-block relative w-[2.87rem] h-[1px] bg-primary bottom-[-1rem]" />
                  <Paragraph tw="text-[1.375rem] lg:(text-2xl)">
                    {service.title}
                  </Paragraph>
                </div>

                <Paragraph>{service.desc}</Paragraph>
              </div>
            ))}
          </div>
        </div>

        <div tw="bg-secondary px-16 pb-[6.14rem] w-full lg:(w-[40%] relative flex items-center py-[7rem] px-0) xl:(py-[9.44rem])">
          <Image
            alt=""
            src={servicesImg}
            tw="relative -mt-[4.6rem] w-full object-cover max-w-[450px] mx-auto lg:(m-0 ml-[-3.3rem] max-w-[calc(100%_+_2rem)] h-full) xl:(w-[32rem])"
          />
        </div>
      </Maxwidth>
    </section>
  )
}

const services = [
  {
    title: 'Website development',
    desc: 'Establish a captivating online presence with our custom website development services. From sleek and minimalist designs to engaging and interactive layouts, we create websites that leave a lasting impression.',
  },
  {
    title: 'UI/UX Design',
    desc: 'Elevate your digital products with captivating user interfaces and intuitive user experiences. Our design team crafts visually stunning and user-friendly interfaces that resonate with your target audience.',
  },
  {
    title: 'Web App Development',
    desc: 'Transform your ideas into powerful and dynamic web applications that cater to your unique business needs. Our expert developers ensure a seamless user experience and robust functionality.',
  },
]

export default Services
