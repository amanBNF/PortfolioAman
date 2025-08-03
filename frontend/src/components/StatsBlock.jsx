import React from 'react'

const StatsBlock = () => {
    return (
        <div className='flex flex-col p-5 items-center justify-center h-max bg-[#111111] mb-8'>
            <h1 className='py-4 font-bold font-mono text-4xl'>Numbers That Matter</h1>
            <div className="flex gap-14 flex-wrap">
                <div className='w-[250px] h-[150px] bg-[#222] flex flex-col items-center justify-center rounded-2xl text-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-blue-800/30 text-white transition duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] hover:bg-amber-100'>
                    <span className='text-amber-200 text-4xl mb-1'>10+</span>
                    <h1>Live Projects</h1>
                </div>

                <div className='w-[250px] h-[150px] bg-[#222] flex flex-col items-center justify-center rounded-2xl text-white text-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-blue-800/30 transition duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] hover:bg-amber-100'>
                    <span className='text-amber-500 text-4xl mb-1'>300+</span>
                    <h1>Leetcode Qs.</h1>
                </div>

                <div className='w-[250px] h-[150px] bg-[#222] flex flex-col items-center justify-center rounded-2xl text-white text-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-blue-800/30 transition duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] hover:bg-amber-100'>
                    <span className='text-emerald-500 text-4xl mb-1'>25+</span>
                    <h1>Repositories</h1>
                </div>

                <div className='w-[250px] h-[150px] bg-[#222] flex flex-col items-center justify-center rounded-2xl text-white text-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-blue-800/30 transition duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] hover:bg-amber-100'>
                    <span className='text-lime-500 text-4xl mb-1'>80+</span>
                    <h1>Git commits</h1>
                </div>

            </div>

        </div>
    )
}

export default StatsBlock