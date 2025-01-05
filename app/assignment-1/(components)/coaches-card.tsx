interface CoachesCardProps {
    name: string,
    description: string
}

const CoachesCard= ({ name, description }:CoachesCardProps) => {
    return (
        <div className='card bg-blue-500 h-full flex flex-col justify-end p-4'>
            <div className=''>
                <h3 className='font-orbitron text-white'>
                    {name}
                </h3>
                <p className='text-white text-xs'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default CoachesCard