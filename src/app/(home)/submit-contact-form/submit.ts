import { contactFormInputs } from '@/types'
import axios from 'axios'
import emailjs from '@emailjs/browser'

export const submitContactForm = async ({
  data,
  token,
}: {
  data: contactFormInputs
  token: any
}) => {
  const validate = await axios.post(
    '/submit-contact-form',
    { token },
    {
      withCredentials: true,
    },
  )

  if (validate.data?.verified) {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
      data,
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
    )

    return response
  }

  return Error('something went wrong')
}
