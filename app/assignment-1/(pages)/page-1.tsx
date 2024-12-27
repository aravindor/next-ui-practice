import React from 'react'
import Navbar from '../(components)/navbar'

const Page1 = () => {
    return (
        <div className='p-4'>
            <Navbar />
            <div className='flex flex-col lg:flex-row mt-6 gap-4'>
                <div className='card bg-fl-green  px-4 py-12 h-80 rounded-2xl flex-1'>
                    <h1 className='text-5xl font-semibold font-orbitron'>Welcome to 10is club!</h1>
                    <p className='text-sm font-normal mt-6 w-full md:w-[80%] lg:w-[70%]'>
                        At 10is Club, we are enthusiastic about tennis and committed to creating a lively
                        community for players of all abilities. Founded to champion the sport of tennis,
                        our club provides excellent facilities, expert coaching, and a welcoming atmosphere for
                        both casual and competitive players.</p>
                    <button className='btn bg-black hover:bg-black mt-6 w-fit text-fl-green font-thin'>Get membership</button>
                </div>
                <div className='card bg-orange-700 h-80 rounded-2xl lg:w-48 '>

                </div>
            </div>
            <div className='grid md:grid-cols-4 grid-rows-5 md:grid-flow-col mt-12 gap-5'>
                <div className='card md:col-span-1 md:row-span-5 bg-black p-4'>
                    <h2 className='text-white font-orbitron text-4xl mr-12'>
                        Why choose us?
                    </h2>
                </div>
                <div className='card bg-zinc-100 md:col-span-1 md:row-span-3 p-4'>
                    <h4 className='font-bold text-sm'>State of the art facilities</h4>
                    <p className='text-xs'>
                        Enjoy our meticulously maintained courts and cutting edge fitness center, and luxurious club house
                    </p>
                </div>
                <div className='card bg-zinc-100 md:col-span-1 md:row-span-3 p-4'>
                    <h4 className='font-bold text-sm'>Expert coaches</h4>
                    <p className='text-xs'>
                        Our coaches are dedicated to helping you improve your game, whether you are just starting out or a pro
                    </p>
                </div>
                <div className='card bg-zinc-100 md:col-span-1 md:row-span-3 p-4'>
                    <h4 className='font-bold text-sm'>Community focused</h4>
                    <p className='text-xs'>
                        join the vibrant community of tennis enthusiasts who share your passion for the game
                    </p>
                </div>
                <div className='card bg-neutral-400 md:col-span-3 md:col-start-2 md:row-span-2 md:row-start-4'>

                </div>
            </div>
        </div>
    )
}

export default Page1