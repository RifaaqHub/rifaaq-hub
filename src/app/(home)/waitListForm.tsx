import { Button, Heading, Icon, Maxwidth, Paragraph } from '@/components'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'
import { waitListInput } from '../../../types/waitlistInput'

const WaitListForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<waitListInput>({
    defaultValues: {
      email: '',
      nickname: '',
    },
  })

  // const { mutate: join } = useJoinWaitList()

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const subscribe = (data: waitListInput) => {
    // join(data)
  }

  return (
    <Maxwidth
      as="section"
      id="join-waitlist"
      tw="py-14 px-6 md:(px-10 py-[4.25rem]) 2xl:(py-[5.16rem] px-[6.25rem])"
    >
      <form
        onSubmit={handleSubmit(subscribe)}
        tw="w-full relative overflow-hidden px-4 py-[6.25rem] flex flex-col gap-6 rounded-[0.75rem] text-white text-center bg-primary bg-cover bg-no-repeat  lg:(gap-4 py-[4.5rem])"
      >
        <Icon tw="absolute -top-[3rem] -right-[3rem] 2xl:(-top-[6rem] -right-[6rem])" />
        <Icon tw="absolute -bottom-[3rem] -left-[3rem] 2xl:(-bottom-[6rem] -left-[6rem])" />

        <div tw="max-w-[44rem] mx-auto flex flex-col gap-4">
          <Heading as="label" htmlFor="email">
            Join Our Waitlist Today!
          </Heading>
          <Paragraph tw="pb-6 lg:(pb-8)">
            Are you ready to embark on a transformative journey towards becoming
            the best version of yourself? Join our waitlist and be among the
            first to experience Rifaaq - the ultimate companion for your
            spiritual growth and all-round development.
          </Paragraph>
        </div>

        <div tw="flex flex-col items-center justify-stretch gap-4 w-full max-w-[35rem] mx-auto">
          <Input
            type="text"
            placeholder="Name/Qunya"
            {...register('nickname', { required: true, minLength: 3 })}
            css={[errors?.email && tw`border border-[red]`]}
          />
          <Input
            type="text"
            placeholder="Email"
            {...register('email', { required: true, pattern: emailPattern })}
            css={[errors?.email && tw`border border-[red]`]}
          />

          <Button tw="text-lg whitespace-nowrap px-0 w-full md:(max-w-[17.2rem]) ml-auto">
            Join Now
          </Button>
        </div>
      </form>
    </Maxwidth>
  )
}

const Input = tw.input`bg-white w-full rounded-[1rem] p-[0.88rem] text-black font-semibold lg:(p-[1.5rem] text-xl)`

export default WaitListForm
