import sg from '@sendgrid/mail'

sg.setApiKey(process.env.SENDGRID_API_KEY!)

export const sgMail = sg
