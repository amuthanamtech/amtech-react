import React from 'react'
import Projects from '../components/Projects'
import ChildBanner from '../components/ChildBanner'

const ProjectPage = ({project}) => {
  return (
    <>
    <ChildBanner pageName={project} />
    <Projects />
    </>
    
  )
}

export default ProjectPage