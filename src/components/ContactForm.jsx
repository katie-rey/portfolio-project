import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/bbd1c1a0-071f-11ed-be50-e78da9ee852d'

const ContactForm = () => {
  // const [name, setName] = React.useState('Your name')
  // const [email, setEmail] = React.useState('Email')

  // const handleChange = (event) => {
  //   setName(event.target.value)
  //   setEmail(event.target.value)
  // }

  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true)
    }, 100)
  }

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    )
  }

  return (
    <div className="contact-form">
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
        <FormControl>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            // value={name}
            // onChange={handleChange}
            label="Name"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
            id="component-outlined"
            // value={email}
            // onChange={handleChange}
            label="Email"
          />
        </FormControl>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </div>
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
