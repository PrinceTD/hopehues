import React from 'react'
import Titel from '../../../../../Componets/SectionTitel/Titel'
import img1 from '../../../../../assets/event pic/1.jpg'

function HomeEvent() {
    return (
        <div className='my-8 py-8 rounded-md'>
            <div>
                <Titel
                    heading={'Our Causes & Help Us'}
                    button={'View All'}>
                </Titel>
            </div>
            <div className=''>
                <div className='grid grid-cols-2 mg:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    <div className="flex justify-center items-center max-w-md rounded-lg">
                        <div>
                            <img src={img1}></img>
                            <h2>
                                HELPING
                            </h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                            </p>
                            <p>
                                date: 24/10/234
                            </p>

                        </div>
                    </div>
                    <div className="flex justify-center items-center max-w-md rounded-lg">
                        <div>
                            <img src={img1}></img>
                            <h2>
                                HELPING
                            </h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                            </p>
                            <p>
                                date: 24/10/234
                            </p>

                        </div>
                    </div>
                    <div className="flex justify-center items-center max-w-md rounded-lg">
                        <div>
                            <img src={img1}></img>
                            <h2>
                                HELPING
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <p>
                                date: 24/10/234
                            </p>

                        </div>
                    </div>
                    <div className="flex justify-center items-center max-w-md rounded-lg">
                        <div>
                            <img src={img1}></img>
                            <h2>
                                HELPING
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <p>
                                date: 24/10/234
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default HomeEvent