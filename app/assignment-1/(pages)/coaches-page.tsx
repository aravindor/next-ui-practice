import React from 'react'
import CoachesCard from '../(components)/coaches-card'
import FullScreenBanner from '../(components)/full-screen-banner'

const coaches = [
    [{
        id: 1,
        name: 'Emily Davis',
        description: 'Excels at working with beginners and intermediates',
        image: ''
    },
    {
        id: 2,
        name: 'John Thompson',
        description: 'Former professional player, 20 years of experience',
        image: ''
    }

    ],
    [{
        id: 3,
        name: 'Markus Weber',
        description: 'Specializing in senior programs, understands the unique needs of older players',
        image: ''
    },
    {
        id: 4,
        name: 'Sophia Lee',
        description: 'Has a talent for nurturing young talent, making tennis fun for kids',
        image: ''
    },
    ]
]

const CoachesPage = () => {
    return (
        <div className='mt-12 p-4'>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-1 grid grid-cols-2 grid-rows-3 lg:grid-rows-12 gap-4'>
                    <div className='card bg-zinc-100 p-4 col-span-2 lg:col-span-1 lg:row-span-6'>
                        <h3 className='font-orbitron text-xl font-bold'>
                            Coaches
                        </h3>
                        <p className='text-sm mt-2'>
                            Our team of highly qualified coaches
                            is dedicated to helping you reach
                            your full potential on the court
                        </p>
                    </div>
                    {
                        coaches[0].map((coach, index) => (
                            <div key={coach.id} className={`row-span-2 ${index === 0 ? 'lg:row-span-7' : 'lg:row-span-6'} `}>
                                <CoachesCard name={coach.name} description={coach.description} />
                            </div>
                        ))
                    }
                    <div className='card bg-blue-500 col-span-2 lg:col-span-1 row-span-1  lg:h-full lg:row-span-5'>

                    </div>
                </div>
                <div className='flex-1 grid grid-cols-2 grid-rows-4 lg:grid-rows-12 gap-4'>
                    <div className='card bg-zinc-100 p-4  col-span-2 lg:col-span-1 row-span-1  lg:row-span-6'>
                        <p className='text-xs'>
                            Our coaches are here to guide you,
                            whether you&apos;re just starting out or aiming to compete at the highest levels.
                        </p>
                        <p className='text-xs mt-2'>
                            Their personalized approach ensures that you receive the attention and support you need to thrive on the court.
                        </p>
                    </div>
                    {
                        coaches[1].map((coach, index) => (
                            <div key={coach.id} className={`row-span-2 ${index === 0 ? 'lg:row-span-7' : 'lg:row-span-6'} `}>
                                <CoachesCard key={index} name={coach.name} description={coach.description} />
                            </div>
                        ))
                    }
                    <div className='card bg-blue-500 col-span-2 lg:col-span-1 lg:h-full row-span-1 lg:row-span-5'>

                    </div>
                </div>
            </div>
            <FullScreenBanner className='bg-zinc-100'>
                <div className='bg-zinc-100 mt-12'>
                    <h1 className='h3 font-orbitron text-3xl font-bold'>Keep going with 10is club!</h1>
                    <div className='flex flex-col-reverse lg:flex-row gap-4 mt-4'>
                        <div className='flex-1'>
                            <h4 className='font-orbitron font-bold'>10is club</h4>
                            <p className='text-xs mt-2'>Where Tradition Meets Excellence on the Court.</p>
                            <p className='text-xs mt-2'>Privacy Policy</p>
                            <p className='text-xs'>Terms of Service</p>
                            <p className='text-xs'>© 2024 10is club. all rights reserved</p>
                        </div>
                        <div className='flex lg:flex-1 justify-between'>
                            <div className=''>
                                <p className='text-xs font-bold'>Stay connected:</p>
                                <p className='text-xs mt-2 '>Facebook</p>
                                <p className='text-xs mt-2 '>X</p>
                                <p className='text-xs mt-2 '>Instagram</p>
                                <p className='text-xs mt-2 '>LinkedIn</p>
                            </div>
                            <div className=' lg:self-end'>
                                <p className='text-xs '>123 Tennis Lane, Heritage Town</p>
                                <p className='text-xs mt-2'>(123) 456-7890</p>
                                <p className='text-xs mt-2'>info@10isclub.com</p>
                            </div>
                        </div>

                    </div>

                </div>
            </FullScreenBanner>

        </div>
    )
}

export default CoachesPage