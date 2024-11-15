import React from 'react'
import Contact from '../components/Contact'
import ChildBanner from '../components/ChildBanner'

const ContactPage = ({contact}) => {
  return (
    <>
    <ChildBanner pageName={contact} />
    <Contact />
    </>

  )
}

export default ContactPage