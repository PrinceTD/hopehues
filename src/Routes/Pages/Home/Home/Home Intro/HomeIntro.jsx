import React from 'react'
import Intro from '../../Introduction/Intro'
import UPCHome from '../../Event/UpcommingEventHome/UPCHome'
import UpCOMMINGHome from '../../Event/UpcommingEventHome/UpCOMMINGHome'

function HomeIntro() {
    return (
        <div className='py-2'>
            <div className='grid grid-cols-1 mg:grid-cols-4 lg:grid-cols-6 gap-4'>
                <Intro></Intro>
                <div className='col-span-2'>
                    <UpCOMMINGHome />
                </div>
            </div>
        </div>
    )
}

export default HomeIntro