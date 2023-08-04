import { ComponentPropsWithoutRef } from 'react'
import tw, { styled, css } from 'twin.macro'

interface ButtonProps {
  $variant?: 'primary' | 'secondary'
  $isSmall?: boolean
  $shadow?: boolean
}

const Button = styled.button<ButtonProps>(({ $variant, $isSmall, $shadow }) => [
  // The common button styles added with the tw import
  tw`px-7 py-4 rounded-[1rem] bg-secondary text-primary font-bold text-lg transform duration-75 hocus:(scale-105) lg:(px-8)`,

  // Use props to conditionally style your components
  $variant === 'primary' && tw`bg-primary text-white`,

  $shadow &&
    css`
      box-shadow: 3px 5px 19px 0px rgba(255, 207, 63, 0.3);
    `,

  // Conditional props can be used
  $isSmall && tw`text-sm`,

  // // The theme import can supply values from your tailwind.config.js
  // css`
  //   color: ${theme`colors.white`};
  // `,
])

export const JoinWaitlist = ({
  shadow,
  ...props
}: { shadow?: boolean } & ComponentPropsWithoutRef<'a'>) => (
  <Button as={'a'} href="#join-waitlist" $shadow={shadow} {...props}>
    Join Our Waitlist
  </Button>
)

export default Button
