// app/api/send-email/route.js
'use server'

import emailjs from '@emailjs/nodejs'

export async function POST(request) {
  try {
    const formData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return Response.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Format current date and time
    const now = new Date()
    const submissionDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })

    // Create professional string message
    const messageContent = `
NEW CONTACT FORM SUBMISSION
===========================
Date: ${submissionDate}

CONTACT DETAILS
---------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject || 'General Inquiry'}

MESSAGE
-------
${formData.message}

This message was sent via the contact form on your website.
`.trim()

console.log(process.env.EMAILJS_SERVICE_ID);
    // Send email using EmailJS
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        message: messageContent,
        email: formData.email,
        title: 'title'
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY
      }
    )

    if (response.status === 200) {
      return Response.json({ success: true })
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Email sending error:', error)
    return Response.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    )
  }
}