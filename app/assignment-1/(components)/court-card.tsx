import React from 'react'

interface CourtCardProps {
    image: string,
    header: string,
    content: string
}

const CourtCard: React.FC<CourtCardProps> = ({  header, content }) => {
    return (
        <div className='h-96'>
            <div className='h-60 bg-green-950 rounded-xl'>
            </div>
            <h4 className='text-white mt-4 font-orbitron font-bold'>{header}</h4>
            <p className='text-white mt-4 text-sm'>{content}</p>
        </div>
    )
}

export default CourtCard