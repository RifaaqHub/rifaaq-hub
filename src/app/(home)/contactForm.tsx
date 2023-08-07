'use client'

import { Button, Heading, Maxwidth, Paragraph, SubTitle } from '@/components'
import { contactFormInputs } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useFieldArray, useForm } from 'react-hook-form'
import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import contactImg from '/public/contact.png'
import tw from 'twin.macro'
import useSubmitContactForm from './submit-contact-form/useSubmitForm'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useCallback } from 'react'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<contactFormInputs>({
    defaultValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
  })

  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleRecaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return
    }

    return await executeRecaptcha('contact_form')
  }, [executeRecaptcha])

  const { mutate: sendForm, isLoading } = useSubmitContactForm()

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const subscribe = async (data: contactFormInputs) => {
    const token = await handleRecaptchaVerify()
    sendForm({ data, token }, { onSuccess: () => reset() })
  }

  return (
    <Maxwidth
      as="section"
      id="contact"
      tw="flex flex-col lg:(flex-row justify-between)"
    >
      <div tw="py-20 px-6 pb-[10rem] bg-[#f9f9f9] md:(px-[3rem]) lg:(bg-transparent)">
        <SubTitle tw="pb-6">KEEP IN TOUCH</SubTitle>
        <Heading $serif>Contact Us</Heading>
        <form
          onSubmit={handleSubmit(subscribe)}
          tw="pt-16 flex flex-col gap-12 md:(max-w-[70%]) lg:(max-w-[26.9rem])"
        >
          {fields.map(field => {
            let styles = [
              tw`border-b py-1 w-full bg-transparent border-b-[#B5B4B4] hocus:(border-0 outline-none border-b-2)`,
              errors?.email && tw`border-[red]`,
            ]

            return (
              <div key={field.field} tw="flex flex-col">
                <label>{field.label}</label>

                {field.field === 'message' ? (
                  <textarea
                    {...register(field.field as keyof contactFormInputs, {
                      required: true,
                      minLength: 3,
                    })}
                    css={[...styles, tw`h-[5rem]`]}
                    // cols={5}
                  />
                ) : (
                  <input
                    type={'text'}
                    {...register(field.field as keyof contactFormInputs, {
                      required: true,
                      minLength: 3,
                      pattern: field.field === 'email' ? emailPattern : /.{3,}/,
                    })}
                    css={styles}
                  />
                )}
              </div>
            )
          })}

          <Button
            disabled={isSubmitting || isLoading}
            tw="w-full md:(max-w-[17.2rem] mr-auto) disabled:(cursor-not-allowed)"
          >
            Contact Us
          </Button>
          <div id="recap" />
        </form>
      </div>

      <footer tw="bg-primary relative text-white px-[2.62rem] py-[3.81rem] md:(px-[3rem]) lg:(flex gap-8 items-center py-[10rem] max-w-[50%]) xl:(py-[13rem] max-w-[60%] gap-[5rem])">
        <div tw="mx-auto relative top-[-9rem] lg:(top-0 left-[-20%]) xl:(w-[31.75rem])">
          <Image alt="" src={contactImg} tw="w-full object-cover" />
        </div>

        <div tw="flex flex-col gap-16 mt-[-4rem] lg:(relative left-[-15%] mt-0 min-w-max)">
          {contacts.map(contact => {
            let Icon = contact.icon
            return (
              <div key={contact.title} tw="flex flex-col gap-3">
                <div tw="flex gap-3">
                  <Icon size={30} />
                  <Paragraph>{contact.title}</Paragraph>
                </div>

                {contact.link ? (
                  <Link href={contact.title} tw="text-[#C6C6C6]">
                    {contact.label}
                  </Link>
                ) : (
                  <Paragraph>{contact.label}</Paragraph>
                )}
              </div>
            )
          })}

          <Paragraph tw="font-bold pb-[2.5rem] lg:(relative top-[12rem] right-[-3rem])">
            &copy; Rifaaq Hub 2023
          </Paragraph>
        </div>
      </footer>
    </Maxwidth>
  )
}

const contacts = [
  {
    title: 'PHONE',
    label: '+234 818 601 2349',
    icon: AiTwotonePhone,
    link: '',
  },
  {
    title: 'EMAIL',
    label: 'rifaaqhq@gmail.com',
    icon: AiOutlineMail,
    link: 'mailto:rifaaqhq@gmail.com',
  },
  {
    title: 'ADDRESS',
    label: 'RifaaqHq, Nigeria',
    icon: GoLocation,
    link: '',
  },
]

const fields = [
  { label: 'Name', field: 'name' },
  { label: 'Email', field: 'email' },
  { label: 'Subject', field: 'subject' },
  { label: 'Message', field: 'message' },
]

export default ContactForm
