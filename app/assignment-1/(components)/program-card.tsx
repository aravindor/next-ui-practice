import React from 'react'
import { Check,ChevronRight } from 'lucide-react'

interface ProgramCardProps {
    name: string,
    feature_list: string[],
    price: string,
    bg_color: string
}

const ProgramCard: React.FC<ProgramCardProps> = ({ name, feature_list, price, bg_color }) => {
    return (
        <div className={`card flex flex-1 flex-col justify-between p-4 h-96 ${bg_color} ${bg_color === 'bg-black' ? 'text-white' : ''}`}>
            <div>
                <h2 className='font-orbitron font-bold'>{name}</h2>
                <ul className='mt-4'>
                    {feature_list.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <Check className="mr-2" size={22} />
                            <span className='flex-1'>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex justify-between'>
                <p className='font-orbitron font-bold'>{price}</p>
                <button className='btn btn-circle btn-fl-green bg-fl-green hover:bg-fl-green'><ChevronRight /></button>
            </div>

        </div>
    )
}

export default ProgramCard