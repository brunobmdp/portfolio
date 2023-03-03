import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '@src/lib/axios'
import { PageInfo } from '@src/@types/typings'

const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'must have more than 3 characters' }),
  email: z.string().min(3, { message: 'must have more than 3 characters' }),
  subject: z.string().min(3, { message: 'must have more than 3 characters' }),
  message: z.string().min(3, { message: 'must have more than 3 characters' }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

type Props = {
  pageInfo: PageInfo
}

export default function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleContactSubmit(formData: ContactFormData) {
    try {
      await api.post('contact', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
      reset()
      alert('E-mail sended')
    } catch (error) {
      alert('deu ruim')
    }
  }

  return (
    <div className="flex flex-col  h-full w-full max-w-7xl ">
      <h3 className="pageTitle">contact</h3>
      <h4 className="uppercase tracking-[3px] p-5 text-gray400 text-md text-center">
        If you need some of my skills.{' '}
        <span className="text-blue400">Contact me</span>
      </h4>
      <div className="flex flex-col w-full h-full gap-5 justify-around items-center  lg:flex-row">
        <div className=" flex flex-col gap-5 items-center">
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-blue400 h-7 w-7 animate-pulse" />
            <p className=" text-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-blue400 h-7 w-7 animate-pulse" />
            <p className=" text-2xl">{pageInfo.email}</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className=" text-blue400 h-7 w-7 animate-pulse" />
            <p className=" text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          className=" flex flex-col gap-2"
          onSubmit={handleSubmit(handleContactSubmit)}
        >
          <div className="flex flex-wrap gap-2 ">
            <input
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
              {...register('name')}
            />
            <input
              placeholder="E-mail"
              className="contactInput flex-1"
              type="email"
              {...register('email')}
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput "
            type="text"
            {...register('subject')}
          />
          <textarea
            placeholder="Message"
            className="contactInput "
            {...register('message')}
          />
          <button
            type="submit"
            className=" bg-blue400 py-5 px-10 rounded-md text-gray100 font-bold
            text-lg disabled:cursor-not-allowed disabled:opacity-40"
            disabled={isSubmitting || !isValid}
          >
            Send me a e-mail
          </button>
        </form>
      </div>
    </div>
  )
}
