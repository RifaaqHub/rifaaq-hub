import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { token } = await request.json()

  try {
    const verifyCaptcha = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`,
    )
    const captchaResponse = await verifyCaptcha.json()

    if (captchaResponse?.success) {
      return NextResponse.json({ verified: true })
    } else {
      return NextResponse.json({ error: captchaResponse }, { status: 400 })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 400 })
  }
}
