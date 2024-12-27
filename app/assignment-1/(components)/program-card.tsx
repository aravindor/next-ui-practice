import React from 'react'
import { Check, ChevronRight } from 'lucide-react'

interface ProgramCardProps {
    name: string,
    feature_list: string[],
    price: string,
    bg_color: string
}

const ProgramCard: React.FC<ProgramCardProps> = ({ name, feature_list, price, bg_color }) => {
    return (
        <div className={`card flex flex-1 flex-col row-span-1 
        justify-between p-4 h-96 min-h-80 relative 
        ${bg_color} ${bg_color === 'bg-black' ? 'text-white' : ''}`}>
            <div>
                <h2 className='font-orbitron font-bold'>{name}</h2>
                <ul className='mt-4'>
                    {feature_list.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <Check className="mr-2" size={22} />
                            <span className='flex-1 text-s'>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <p className='font-orbitron font-bold'>{price}</p>
            <div
                className='bg-white absolute bottom-[-1rem] right-[-1rem] w-[4.5rem] h-[4.5rem] rounded-tl-[2rem] 
                           before:content-[""] before:w-6 before:h-6 before:bg-transparent 
                           before:absolute before:top-[-1.5rem] before:right-[1rem] before:rounded-br-full 
                           before:shadow-[15px_15px_0_15px_rgba(255,255,255,1)]
                           after:content-[""] after:w-6 after:h-6 after:bg-transparent
                           after:absolute after:bottom-[1rem] after:left-[-1.5rem] after:rounded-br-full 
                           after:shadow-[15px_15px_0_15px_rgba(255,255,255,1)]
                           '
            />
            <button className='absolute btn btn-circle btn-fl-green bg-fl-green hover:bg-fl-green  bottom-0 right-0 '>
                <ChevronRight />
            </button>
        </div>
    )
}

export default ProgramCard