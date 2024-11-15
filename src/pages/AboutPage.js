import React from 'react'
import AboutUs from '../components/AboutUs'
import FeatureListing from '../components/FeatureListing'
import Highlights from '../components/Highlights'
import ChildBanner from '../components/ChildBanner'

const AboutPage = ({about}) => {
  return (
    <>
    <ChildBanner pageName={about}/>
    <FeatureListing />
    <AboutUs />
    <Highlights />
    </>
  )
}

export default AboutPage