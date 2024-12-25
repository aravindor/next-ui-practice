import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface AssignmentItemsProps {
    name: string,
    image: StaticImageData,
    reference: string,
    page: string,
    date: string,
    completed: boolean,
}

const AssignmentItems = ({ name, image, reference, page, date, completed }: AssignmentItemsProps) => {
    return (
        <div className='card card-compact w-[300px] shadow-xl h-[320px] min-w-[280px]'>
            <figure className='w-full h-[280px] bg-primary-content p-2'>
                <Image width={0} height={0} sizes='100vw' src={image.src} objectFit='' alt="Assignment image" style={{ width: "100%", height: "100%" }} />
            </figure>
            <div className='card-body'>
                <div>
                    <div className='flex items-center space-x-2'>
                        <h2 className='text-lg font-bold py-0'>{name}</h2>
                        <span className={clsx('badge', { 'badge-success': completed, 'badge-neutral': !completed })}>{completed ? "Completed" : "In progress"}</span>
                    </div>
                    <p className='text-xs font-thin p-0'>{date}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className='btn btn-sm btn-outline'><Link href={reference}>View reference </Link></button>
                    <button className="btn btn-sm btn-primary"><Link href={page}>View UI </Link></button>
                </div>
            </div>
        </div>
    )
}

export default AssignmentItems