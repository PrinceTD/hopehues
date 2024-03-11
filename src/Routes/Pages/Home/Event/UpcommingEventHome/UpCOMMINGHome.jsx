import React, { useEffect, useState } from 'react'
import UPCHome from './UPCHome';
import AllEVent from '../AllEvent/AllEVent';

function UpCOMMINGHome() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/upcommingevent')
            .then(res => res.json())
            .then(data => {
                const home = data.filter(item => item.category === 'home');
                setEvent(home)
            })
    }, [])
    return (
        <div>
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