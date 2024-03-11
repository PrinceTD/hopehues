import React from 'react'
import Intro from '../../Introduction/Intro'
import UPCHome from '../../Event/UpcommingEventHome/UPCHome'
import UpCOMMINGHome from '../../Event/UpcommingEventHome/UpCOMMINGHome'

function HomeIntro() {
    return (
        <div className='p-6'>
            <div className='grid grid-cols-1 mg:grid-cols-4 lg:grid-cols-6 items-center'>
                <Intro></Intro>
                <div className='col-span-2 px-2'>
                    <UpCOMMINGHome />
                </div>
            </div>
        </div>
    )
}

export default HomeIntro