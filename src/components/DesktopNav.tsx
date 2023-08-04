'use client'

import Button, { GetStartedButton } from '@/components/Button'
import Logo from '@/components/Logo'
import routePaths, { headerLinks } from '@/lib/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import tw from 'twin.macro'

const DestopNav = () => {
  const path = usePathname()

  return (
    <nav tw="hidden lg:flex relative items-center flex-1 justify-between text-[white]">
      <Link href={'/'}>
        <Logo />
      </Link>

      <ul tw="flex flex-row gap-[2rem] xl:gap-[3rem]">
        {headerLinks.map(link => {
          let href = link.href
          return (
            <li
              key={link.title}
              css={[
                tw`hover:underline font-semibold`,
                path === link.href && tw`text-[#FF0073]`,
              ]}
            >
              <a href={href}>{link.title}</a>
            </li>
          )
        })}
      </ul>

      <div tw={'flex items-center mt-0 gap-4 2xl:gap-[2.5rem]'}>
        <GetStartedButton />
      </div>
    </nav>
  )
}

export default DestopNav
