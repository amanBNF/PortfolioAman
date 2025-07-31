import React from 'react'

const StatsBlock = () => {
    return (
        <div className='flex flex-col p-5 items-center justify-center h-max bg-[#111111]'>
            <h1 className='py-4 font-bold font-mono text-4xl'>Numbers That Matter</h1>
            <div className="flex gap-14 flex-wrap">
                <div className='w-[250px] h-[150px] bg-[#222] flex flex-col items-center justify-center rounded-2xl text-white text-3xl'>
                    <span className='text-amber-200 text-4xl'>10+</span>
                    <h1>Live Projects</h1>
                </div>
                <div className='w-[250px] h-[150px] bg-[#222] flex items-center justify-center rounded-2xl text-white text-3xl'>
                    <span className=''>25%</span>
                </div>
                <div className='w-[250px] h-[150px] bg-[#222] flex items-center justify-center rounded-2xl text-white text-3xl'>
                    <span className=''>25%</span>
                </div>
                <div className='w-[250px] h-[150px] bg-[#222] flex items-center justify-center rounded-2xl text-white text-3xl'>
                    <span>25%</span>
                </div>
            </div>

        </div>
    )
}

export default StatsBlock