'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useRef } from 'react'
import { submitContactForm } from './submit'

const useSubmitContactForm = () => {
  const toastId = useRef<any>()

  let dismiss = () => {
    if (toastId.current) toast.dismiss(toastId.current)
  }

  const onSettled = () => {
    dismiss()
  }

  const onMutate = () => {
    toastId.current = toast.loading('Sending message...')
  }

  const onSuccess = (data: any) => {
    toast.success(data?.message ?? 'Thanks, we will reach out shortly')
  }
  const onError = (error: any) => {
    toast.error(
      error?.response?.data.errors?.[0]?.msg ??
        'something went wrong, please try again',
    )
  }

  return useMutation({
    mutationKey: ['submit-contact-form'],
    onMutate,
    mutationFn: submitContactForm,
    onSettled,
    onSuccess,
    onError,
  })
}

export default useSubmitContactForm
