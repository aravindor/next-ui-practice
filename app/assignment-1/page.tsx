import React from 'react'
import WelcomePage from './(pages)/welcome-page'
import ProgramPage from './(pages)/program-page'
import CoachesPage from './(pages)/coaches-page'

const Assignment1Page = () => {
  return (
    <div className='grid grid-cols-12 bg-white' >
      <div className='col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3'>
        <WelcomePage />
        <ProgramPage/>
        <CoachesPage/>
      </div>

    </div>

  )
}

export default Assignment1Page