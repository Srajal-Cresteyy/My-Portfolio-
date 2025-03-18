import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
// import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_oi2phtk',
        'template_9xobvyl',
        form.current,
        'Dz3J7-UGSqrPbvosV'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }
  return (
    <section id="contacts">
      <h5 className="heading">Get In Touch</h5>
      <h2 className="cen-contact">Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>srajal72dwivedi@gmail.com</h5>
            <a href="mailto:srajal72dwivedi@gmail.com">Send Mail</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Srajal Dwivedi</h5>
            <a href="https://www.linkedin.com/in/srajal-dwivedi-7275641b2/">
              Send Request
            </a>
          </article>
          {/*           <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+918173090637</h5>
            <a href="https://api.whatsapp.com/send?phone+918173090637">Send Message</a>
          </article> */}
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="Your Email "
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {' '}
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
