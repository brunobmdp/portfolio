import { MailDataRequired } from '@sendgrid/mail'
import { sgMail } from '@src/lib/sendgrid'

import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const contactBodySchema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const { email, message, name, subject } = contactBodySchema.parse(req.body)

  if (!email.trim() || !message.trim() || !name.trim() || !subject.trim()) {
    return res.status(403).json('missing information')
  }

  const msg: MailDataRequired = {
    to: process.env.CONTACT_EMAIL!,
    from: process.env.SENDER_EMAIL!,
    subject: `${subject} - ${name}`,
    text: message,
    replyTo: email,
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })

  return res.status(200).end()
}
