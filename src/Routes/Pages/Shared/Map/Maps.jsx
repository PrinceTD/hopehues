import { Map, Marker } from 'pigeon-maps'
import React from 'react'
import Titel from '../../../../Componets/SectionTitel/Titel'

function Maps() {
    return (
        <div>
            <Titel
                heading={'Our Location'}></Titel>
            <Map height={100} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Marker width={500} anchor={[50.879, 4.6997]} />
            </Map>
        </div>
    )
}

export default Maps