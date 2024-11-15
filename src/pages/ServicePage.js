import React from 'react'
import Service from '../components/Service'
import Newsletter from '../components/Newsletter'
import ChildBanner from '../components/ChildBanner'

const ServicePage = ({service}) => {
  return (
    <>
    <ChildBanner pageName={service} />
    <Service />
    <Newsletter />
    </>
  )
}

export default ServicePage