import React from 'react'
import Page1 from './(pages)/page-1'

const Assignment1Page = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12 lg:col-span-10 lg:col-start-2'>
        <Page1 />
      </div>

    </div>

  )
}

export default Assignment1Page