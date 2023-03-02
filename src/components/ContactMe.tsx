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
    <div
      className="relative h-screen flex flex-col text-center md:text-left  md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className=" absolute top-24 uppercase tracking-[20px] text-gray100 
        text-2xl"
      >
        contact
      </h3>
      <div className=" flex flex-col space-y-10">
        <h4 className=" text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-white">
          If you need some of my skills.{' '}
          <span className="text-blue400">Contact me</span>
        </h4>
        <div className=" space-y-10">
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
          onSubmit={handleSubmit(handleContactSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto "
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
