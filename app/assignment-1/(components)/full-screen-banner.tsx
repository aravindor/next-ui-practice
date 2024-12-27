import React from 'react'
interface FullScreenBannerProps {
    children: React.ReactNode,
    className: string,
}

const FullScreenBanner: React.FC<FullScreenBannerProps> = ({ children, className }) => {
    return (
        <div className={` mt-12 w-screen relative left-1/2 right-1/2 -ml-[50.4vw] -mr-[50.4vw] px-4 ${className}`}>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 lg:px-4 py-12'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FullScreenBanner