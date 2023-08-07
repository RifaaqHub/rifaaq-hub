'use client'

import { useState, useEffect } from 'react'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import routePaths, { headerLinks } from '@/lib/routes'
import tw from 'twin.macro'
import Button, { GetStartedButton } from './Button'

const MobileNav = () => {
  const [menuOpen, setMenu] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      if (menuOpen) {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = ''
      }
    }

    return () => {
      if (body) body.style.overflow = ''
    }
  }, [menuOpen])

  const toggleMenu = () => setMenu(prev => !prev)

  return (
    <div
      css={[
        tw`pt-6 pb-4 w-full lg:hidden`,
        menuOpen && tw`fixed top-0 left-0 bg-[white] pt-8 h-screen`,
      ]}
    >
      <div
        css={[
          tw`flex justify-between`,
          menuOpen && tw`border-b-[1px] px-8 py-4 text-white bg-primary`,
          !menuOpen && tw`text-white`,
        ]}
      >
        <Link href={'/'}>
          <Logo />
        </Link>

        <button title="mobile-menu-button" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={25} /> : <FiMenu size={25} />}
        </button>
      </div>

      <nav
        css={[
          tw`flex-col font-semibold transition lg:hidden`,
          menuOpen && tw`flex bg-[white] w-full h-full text-primary gap-8 p-10`,
          !menuOpen && tw`text-[white] gap-0 h-0 p-0 overflow-hidden`,
        ]}
      >
        <ul
          css={[
            tw`transition`,

            menuOpen &&
              tw`flex flex-col flex-1 gap-4 text-[1.25rem] py-8 overflow-y-auto`,
          ]}
        >
          {headerLinks.map(link => (
            <li
              key={link.title}
              onClick={toggleMenu}
              css={[tw`hover:underline`, menuOpen && tw`px-4`]}
            >
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>

        <ul
          tw={
            'sticky bottom-0 flex flex-col items-stretch gap-4 mt-auto bg-white py-4'
          }
        >
          <GetStartedButton
            onClick={toggleMenu}
            tw="w-full text-center max-w-[100%]"
          />
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav
