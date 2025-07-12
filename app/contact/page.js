'use client'

import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import styles from './page.module.css'

export default function ContactPage() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitting: true, submitted: false, error: null })

    try {
      console.log("1");
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

       console.log("2");

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setFormStatus({ submitting: false, submitted: true, error: null })
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Submission error:', error)
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: error.message || 'Failed to send message. Please try again later.' 
      })
    }
  }

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <section className={styles.hero}>
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries, project consultations, or partnership opportunities.</p>
        </section>

        <section className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Our Office</h2>
            <div className={styles.infoCard}>
              <h3>📍 Address</h3>
            <p>📍 Address: 102, First floor, Prime Elite Building, Near Hotel Urvashi, Vasco da Gama, Goa- 403802</p>
            </div>
            <div className={styles.infoCard}>
              <h3>📞 Phone</h3>
              <p>Milind Subhedar: +91 8805763609</p>
              <br />
              <p>Niel Subhedar: +91 8793804551</p>
            </div>
            <div className={styles.infoCard}>
              <h3>✉️ Email</h3>
              <p>siddharthconstructions01@gmail.com<br /></p>
            </div>
            <div className={styles.infoCard}>

    <h3>📱 Instagram</h3>
    <p>
      <a 
        href="https://www.instagram.com/_siddharth_constructions_?igsh=MWM5eG14a2s0c2wxYQ==" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        @_siddharth_constructions_
      </a>
    </p>
  </div>
            <div className={styles.infoCard}>
              <h3>🕒 Hours</h3>
              <p>10am–6pm<br /></p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Send Us a Message</h2>
            {formStatus.submitted ? (
              <div className={styles.successMessage}>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
                <button 
                  className="btn"
                  onClick={() => setFormStatus({ ...formStatus, submitted: false })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {formStatus.error && (
                  <div className={styles.errorMessage}>
                    {formStatus.error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        <section className={styles.mapSection}>
          <h2>Our Location</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps?q=15.3992906,73.8124926&z=18&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Siddharth Constructions Location"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  )
}