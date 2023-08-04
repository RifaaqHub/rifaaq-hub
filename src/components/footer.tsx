import { Logo, Maxwidth, Paragraph } from '@/components'
import { routes } from '@/lib/routes'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer tw="bg-primary text-white border-b-2 border-b-secondary">
      <Maxwidth tw="flex flex-col gap-[3.38rem] px-6 py-16 items-center lg:(flex-row justify-between items-center px-[6.25rem])">
        <Logo $lightBg={false} />

        <div tw="p-4 flex flex-row gap-4">
          {socials.map(social => {
            const Icon = social.icon
            return (
              <Link href={social.link} key={social.title} title={social.title}>
                <Icon size={25} />
              </Link>
            )
          })}
        </div>

        <Paragraph>&copy; Copyright 2023</Paragraph>
      </Maxwidth>
    </footer>
  )
}

const socials = [
  {
    title: 'twitter',
    icon: FaTwitter,
    link: routes.twitter.path,
  },
  {
    title: 'facebook',
    icon: FaFacebook,
    link: routes.facebook.path,
  },
  {
    title: 'instagram',
    icon: FaInstagram,
    link: '',
  },
]

export default Footer
