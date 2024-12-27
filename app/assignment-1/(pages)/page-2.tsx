import React from 'react'
import ProgramCard from '../(components)/program-card'
import CourtCard from '../(components)/court-card'
import FullScreenBanner from '../(components)/full-screen-banner'

const programList = [
  {
    title: 'Rookie Program',
    feature_list: [
      'Learn the basics of tennis',
      'Patient coaching to build confidence on the court',
      'Develop hand-eye coordination and game awareness'
    ],
    price: '$50/month',
    bg_color: 'bg-zinc-100'

  },
  {
    title: 'Challenger Program',
    feature_list: [
      'Helps refine techniques and improve consistency',
      'Develop strategic play to elevate your game',
      'Learn how to read opponents'
    ],
    price: '$80/month',
    bg_color: 'bg-fl-green'
  },
  {
    title: 'Ace Program',
    feature_list: [
      'Emphasizes high-level techniques',
      'Intense training sessions to prepare you for tournaments and elite competition',
      'Advanced strategies for singles or doubles matches'
    ],
    price: '$80/month',
    bg_color: 'bg-black'
  }
]

const courtItems = [
  {
    image: 'hard-court.jpg',
    header: 'Hard Courts',
    content: 'Provide a consistent bounce and are great for all-around play, offering a balance of speed and control.'
  },
  {
    image: 'indoor-court.jpg',
    header: 'Indoor Courts',
    content: 'Year-round regardless of the weather on our state-of-the-art indoor courts, featuring high-quality surfaces and climate control.'
  },
  {
    image: 'clay-court.jpg',
    header: 'Clay Courts',
    content: 'For players who enjoy longer rallies and strategic baseline play, our clay courts offer a slower surface with excellent grip.'
  },
  {
    image: 'grass-court.jpg',
    header: 'Grass Courts',
    content: 'The classic charm of tennis on our grass courts, known for their fast pace and low bounce, perfect for serve-and-volley.'
  }
]

const Page2 = () => {
  return (
    <div className='mt-12 p-4'>
      <h1 className='font-orbitron text-3xl font-bold'>Tennis program for Every player</h1>
      <div className='flex flex-col lg:flex-row gap-4 mt-6'>
        {
          programList.map((program, index) => (
            <ProgramCard
              key={index}
              name={program.title}
              feature_list={program.feature_list}
              price={program.price}
              bg_color={program.bg_color}
            />
          ))
        }
      </div>
      <FullScreenBanner className='bg-black'>
        <h2 className='text-white font-orbitron text-3xl'>
          World-Class Courts
        </h2>
        <div className='flex flex-col lg:flex-row gap-4 mt-6'>
          {
            courtItems.map((court, index) => (
              <div key={index} className='flex-1'>
                <CourtCard
                  image={court.image}
                  header={court.header}
                  content={court.content}
                />
              </div>
            ))
          }
        </div>
      </FullScreenBanner>
    </div>
  )
}

export default Page2