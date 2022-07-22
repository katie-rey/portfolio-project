import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
function Contact() {
  const [state, handleSubmit] = useForm('xayvroqa')
  if (state.succeeded) {
    return (
      <div className="contact-message">
        <p>Thanks for your message! I'll be in contact shortly.</p>
      </div>
    )
  }
  return (
    <div id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input id="name" type="name" name="name" placeholder="name" />
        <input id="email" type="email" name="email" placeholder="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          className="contact-btn btn btn-light highlighted-btn"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
function App() {
  return <Contact />
}
export default App
