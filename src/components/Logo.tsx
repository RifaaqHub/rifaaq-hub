import Image from 'next/image'
import logo from 'public/logo.svg'
import tw, { styled } from 'twin.macro'

const Logo = ({ $lightBg = true }: { $lightBg?: boolean }) => {
  return (
    <div>
      <Image
        tw="max-w-[113px] lg:(max-w-[187px])"
        src={logo}
        alt="rifaaq-logo"
      />
    </div>
  )
}

export const Icon = styled.div(() => [
  tw`bg-[url(/fav.png)] w-[6.5rem] h-[6.5rem] bg-cover bg-no-repeat lg:(w-[12rem] h-[12rem])`,
])

export default Logo
