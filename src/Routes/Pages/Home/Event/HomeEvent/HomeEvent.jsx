import React, { useEffect, useState } from 'react'
import Titel from '../../../../../Componets/SectionTitel/Titel'
import AllEVent from '../AllEvent/AllEVent';
import HomeEventShow from './HomeEventShow';


function HomeEvent() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch('event.json')
            .then(res => res.json())
            .then(data => {
                const home = data.filter(item => item.category === 'home');
                setEvent(home)
            })
    }, [])
    return (
        <div className='my-8 py-8 rounded-md'>

            <div>
                <Titel
                    heading={'Our Causes & Help Us'}
                    button={'View All'}>
                </Titel>
            </div>
            <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-4 items-center p-4'>

                {
                    event.map(item =>
                        <HomeEventShow
                            key={item._id}
                            item={item}>
                        </HomeEventShow>)
                }

            </div>

        </div >
    )
}

export default HomeEvent