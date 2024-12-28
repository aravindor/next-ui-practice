import React from 'react'
import Page1 from './(pages)/page-1'
import Page2 from './(pages)/page-2'
import Page3 from './(pages)/page-3'

const Assignment1Page = () => {
  return (
    <div className='grid grid-cols-12 bg-white' >
      <div className='col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3'>
        <Page1 />
        <Page2/>
        <Page3/>
      </div>

    </div>

  )
}

export default Assignment1Page