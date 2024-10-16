import React, { useEffect, useState } from 'react'
import UPCHome from './UPCHome';
import AllEVent from '../AllEvent/AllEVent';
import Titel from '../../../../../Componets/SectionTitel/Titel';

function UpCOMMINGHome() {
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
        <div>
            <div>
                <Titel
                    heading={'Upcomming Event'}
                    button={'View All'}>
                </Titel>
            </div>
            {
                event.map(item =>
                    <UPCHome
                        key={item._id}
                        item={item}>
                    </UPCHome>)
            }
        </div>
    )
}

export default UpCOMMINGHome