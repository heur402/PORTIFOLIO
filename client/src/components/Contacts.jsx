import { useState } from 'react'
import emailjs from '@emailjs/browser'
import contactImg from '../assets/contact.png'

const Contacts = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')

    emailjs.send(
      'service_8ug6es9',       // replace with your EmailJS Service ID
      'template_w3cof2i',      // replace with your EmailJS Template ID
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'byiringirobon01fra@gmail.com' // recipient
      },
      'w7YbdncOPw-gQ8NBb'        // replace with your EmailJS Public Key
    ).then(
      (result) => {
        setStatus('Message sent successfully!')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        })
      },
      (error) => {
        setStatus('Error sending message. Try again later.')
        console.error(error)
      }
    )
  }

  return (
    <section
      id='contact'
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className='py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-8 sm:mb-10 md:mb-12' data-aos='fade-up'>
          <h3
            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3'
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Get In <span style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Touch</span>
          </h3>
          <p className='text-base sm:text-lg md:text-xl' style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
            Let's discuss your Project
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center'>
          {/* Image */}
          <div className='flex justify-center order-2 lg:order-1' data-aos='fade-right'>
            <img
              src={contactImg}
              alt="contact"
              className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain'
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
            className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2'
            data-aos='fade-left'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4'>
              <input
                type="text"
                name="firstName"
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937'
                }}
                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937'
                }}
                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
              className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4'
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
              className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base mb-3 sm:mb-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
              required
            />

            <textarea
              name="message"
              rows={4}
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
              className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base mb-3 sm:mb-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
              required
            />

            <button
              type='submit'
              style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
              className='w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'
            >
              Send Message
            </button>

            {status && <p className='mt-3 text-sm text-center text-orange-500'>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts
