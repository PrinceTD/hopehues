import React, { useEffect, useState } from 'react'
import AllEVent from '../AllEVent';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../../Shared/Cover/Cover';
import img1 from '../../../../../../assets/cover banner/3.jpg'

function Event() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/event')
            .then(res => res.json())
            .then(data => {
                const home = data.filter(item => item);
                setEvent(home)
            })
    }, [])
    return (
        <>
            <div>
                <Helmet>
                    <title>Hope Hues | event </title>
                </Helmet>
                <Cover img={img1} titel='Our Event' subTitel='how are you men'></Cover>
            </div>
            <div>
                <h2 className='p-8 text-3xl font-semibold'>
                    Featured Cause
                </h2>
            </div>
            <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-4 items-center p-4'>

                {
                    event.map(item =>
                        <AllEVent
                            key={item._id}
                            item={item}>
                        </AllEVent>)
                }

            </div>
        </>
    )
}

export default Event